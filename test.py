from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbsparta

#이용자 선택
body = 4
acidity = 5
sweet = 2
flavor = 4
bitter = 4

result = [body, acidity, sweet, flavor, bitter]

#신맛,단맛,쓴맛 각각 일치하는 리스트
acidity_list = list(db.coffee.find({'acidity':acidity},{'_id':False}))
sweet_list = list(db.coffee.find({'sweet':sweet},{'_id':False}))
bitter_list = list(db.coffee.find({'bitter':bitter},{'_id':False}))

#신맛,단맛,쓴맛 리스트 통합
taste = acidity_list + sweet_list + bitter_list

#taste리스트 안에서 중복되는 원두 계산
count=0
for i in range(len(taste)) :
    #print(taste[i]['name'])
    count=0
    for j in range(len(taste)) :
        if taste[i]['name'] == taste[j]['name'] :
            count +=1
            db.coffee.update_one({'name': taste[i]['name']}, {'$set': {'count': count}})
        else :
            pass

#중복 많은 순으로 내림차순
sorted_list = sorted(taste, key=(lambda x: x['count']), reverse=True)
print(sorted_list)
#중복 제일 많이 된 원두
print(sorted_list[1]['name'])
