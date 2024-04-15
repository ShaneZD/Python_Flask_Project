# Import Flask and other required modules
from flask import Flask, render_template, request, redirect, url_for

# Initialize Flask app
app = Flask(__name__)

# class for game items
class GameItem:
    def __init__(self, id, name, price, stock, image_url):
        self.id = id
        self.name = name
        self.price = price
        self.stock = stock
        self.image_url = image_url

# inventory data
inventory = [
    GameItem(1, "Runescape T-Shirt", 50, 10, 'images/runescapet.webp'),
    GameItem(2, "The Witcher Tea Mug", 60, 5, "images/witchermug.jpg"),
    GameItem(3, "Kirby Flask", 70, 20, "images/kirbyflask.webp"),
    GameItem(4, "Super Mario T-Shirt", 80, 0, "images/marioshirt.jpg")  
]

# Route for buying items
@app.route('/buy/<int:item_id>', methods=['GET', 'POST'])
def buy(item_id):
    # Find the item in inventory by its ID
    item = next((item for item in inventory if item.id == item_id), None)
    # Check if item exists and is in stock
    if item and item.stock > 0:
        item.stock -= 1
        message = f"Successfully purchased {item.name}."
    else:
        message = "This item is out of stock."
    return message

# Route for the home page
@app.route('/')
def home():
    return render_template('index.html')

# Route for the shop page
@app.route('/shop')
def shop():
    return render_template('shop.html', inventory=inventory)

# Route for the genres page
@app.route('/genres')
def genres():
    return render_template('genres.html')

# Route for the about page
@app.route('/about')
def about():
    return render_template('about.html')

# Route for the contact page
@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        # Get form data
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        # Print the form data (for demonstration)
        print({"name": name, "email": email, "message": message})  
        return "Thank you for your message!"
    return render_template('contact.html')

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
