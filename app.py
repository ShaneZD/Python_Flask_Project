from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)
class GameItem:
    def __init__(self, id, name, price, stock, image_url):
        self.id = id
        self.name = name
        self.price = price
        self.stock = stock
        self.image_url = image_url

inventory = [
    GameItem(1, "Runescape T-Shirt", 50, 10, 'images/runescapet.webp'),
    GameItem(2, "The Witcher Tea Mug", 60, 5, "images/witchermug.jpg"),
    GameItem(3, "Kirby Flask", 70, 20, "images/kirbyflask.webp"),
    GameItem(4, "Super Mario T-Shirt", 80, 0, "images/marioshirt.jpg")  
]

@app.route('/buy/<int:item_id>', methods=['GET', 'POST'])
def buy(item_id):
    item = next((item for item in inventory if item.id == item_id), None)
    if item and item.stock > 0:
        item.stock -= 1
        message = f"Successfully purchased {item.name}."
    else:
        message = "This item is out of stock."
    
    

    return message

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/shop')
def shop():
    return render_template('shop.html', inventory=inventory)
  
@app.route('/genres')
def genres():
    return render_template('genres.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        return "Thank you for your message!"
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
