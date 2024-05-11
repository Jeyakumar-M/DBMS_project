from flask import Flask, render_template, request, redirect, url_for, jsonify,after_this_request
import psycopg2

app = Flask(__name__)
conn = psycopg2.connect(database="postgres", user="postgres",
                        password="123456", host="localhost", port="5433")
cur = conn.cursor()


# Connect to the database
@app.route('/db_connector/<name>')
def db_connector(name):
    @after_this_request
    def add_header(response):
        response.headers['Access-Control-Allow-Origin']='*'
        return response

    query = f'select * from election where name = {name}'
    cur.execute(query)
    l =[]
    for i in cur:
        l.append(i)
    print(l)
    return jsonify(l)



if __name__ == '__main__':
    app.run('0.0.0.0', port=8989)