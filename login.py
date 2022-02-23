from flask import url_for, session, Flask, render_template, request, redirect, jsonify
from pymongo import MongoClient

app = Flask(__name__)
app.secret_key = "lkjds#2-1j@dsp!ldaskfj"

ID = "admin"
PW = "coffee"

client = MongoClient('mongodb://test:test@localhost', 27017)
# client = MongoClient('localhost', 27017)
db = client.coffe_site

## HTML 화면 보여주기
@app.route('/')
def home():
    if "userID" in session:
        return render_template("login.html", username = session.get("userID"), login= True)

    else:
        return render_template("login.html", login= False)

@app.route("/login", methods = ["get"])
def login():
    global ID, PW
    _id_ = request.args.get("loginId")
    _password_ = request.args.get("loginPw")

    if ID == _id_ and _password_ == PW:
        print(_id_, _password_)
        session["userID"] = _id_
        return redirect(url_for("home"))
    else:
        return redirect(url_for("home"))


@app.route("/logout")
def logout():
    session.pop("userID")
    return redirect(url_for("home"))


# 주문하기 시작
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

# 주문 목록보기(Read) API check
@app.route('/order_list', methods=['GET'])
def view_orders():
    coffee_list = list(db.coffes.find({}, {'_id': False}))
    return jsonify({'coffee_order': coffee_list})

@app.route('/order_delete', methods=['POST'])
def delete_star():
    name_receive = request.form['name_give']
    db.coffes.delete_one({'name': name_receive})
    return jsonify({'msg': '삭제 완료!'})

# app.run(host ="0.0.0.0")

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)


