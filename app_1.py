from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

from pymongo import MongoClient

# client = MongoClient('mongodb://test:test@localhost', 27017)
client = MongoClient('localhost', 27017)
db = client.coffe_site


## HTML 화면 보여주기~
@app.route('/')
def homework():
    return render_template('coffee.html')


# 주문하기(POST) API
@app.route('/order', methods=['POST'])
def save_order():
    name_receive = request.form['name_give']
    body_receive = request.form['body_give']
    acidity_receive = request.form['acidity_give']
    sweet_receive = request.form['sweet_give']
    flavor_receive = request.form['flavor_give']
    bitter_receive = request.form['bitter_give']

    doc = {
        'name': name_receive,
        'body': body_receive,
        'acidity': acidity_receive,
        'sweet': sweet_receive,
        'flavor': flavor_receive,
        'bitter': bitter_receive
    }
    db.coffes.insert_one(doc)

    return jsonify({'result': 'success', 'msg': '저장완료!'})


# 주문 목록보기(Read) API
@app.route('/order_list', methods=['GET'])
def view_orders():
    coffee_list = list(db.coffes.find({}, {'_id': False}))
    return jsonify({'coffee_order': coffee_list})

# 주문 삭제하기(delete) API
# @app.route('/order_delete', methods=['post'])
# def delete_orders():
#     name_receive = request.form['name_give']
#
#     db.coffes.delete_one({'name': name_receive})
#
#     return jsonify({'msg':'삭제완료'})


@app.route('/order_delete', methods=['POST'])
def delete_star():
    name_receive = request.form['name_give']
    db.coffes.delete_one({'name': name_receive})
    return jsonify({'msg': '삭제 완료!'})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)