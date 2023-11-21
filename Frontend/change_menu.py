from flask import Flask, render_template, request, redirect
import firebase_admin
from firebase_admin import credentials, db

app = Flask(__name__)

# Initialize Firebase Admin SDK
cred = credentials.Certificate("C:\\Users\\Dell\\Downloads\\food-with-love-de5c4-firebase-adminsdk-udmlc-2ddd1fd6a7.json")
firebase_admin.initialize_app(cred, {
    "databaseURL": "https://food-with-love-de5c4-default-rtdb.firebaseio.com/"
})

# Initialize Realtime Database
ref = firebase_admin.db.reference()

@app.route('/')
def index():
    return render_template('change_menu.html')

@app.route('/update_profile', methods=['POST', 'GET'])
def update_profile():
    if request.method == 'POST':
        # Extract form data
        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')
        # Add more fields as needed

        # Update Realtime Database with the user data
        users_ref = ref.child('users').child(username)
        users_ref.set({
            'username': username,
            'email': email,
            'password': password,
            # Add more fields as needed
        })

    return redirect('/')

@app.route('/update_menu', methods=['POST'])
def update_menu():
    if request.method == 'POST':
        # Extract form data for the menu update
        # You need to add more lines to extract all the dish and price values

        # Example:
        dish1 = request.form.get('dish1')
        price1 = request.form.get('price1')
        dish2 = request.form.get('dish2')
        price2 = request.form.get('price2')
        dish3 = request.form.get('dish3')
        price3 = request.form.get('price3')
        dish4 = request.form.get('dish4')
        price4 = request.form.get('price4')
        dish5 = request.form.get('dish5')
        price5 = request.form.get('price5')


        # Update Realtime Database with the menu data
        # This is just a basic example, you might want to structure your data differently
        menu_ref = ref.child('menu')
        menu_ref.set({
            'dish1': dish1,
            'price1': price1,
            'dish2': dish2,
            'price2': price2,
            'dish3': dish3,
            'price3': price3,
            'dish4': dish4,
            'price4': price4,
            'dish5': dish5,
            'price5': price5
            # Add more fields as needed
        })

    return redirect('/kitchens_page')

if __name__ == '__main__':
    app.run(debug=True)
