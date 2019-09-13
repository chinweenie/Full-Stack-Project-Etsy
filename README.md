# README

[Epsy](https://myepsy.herokuapp.com)
---
Epsy, an Etsy clone, is a global online marketplace where people come togetehr to make, sell, buy and collect unique items.

Here is an image of the homepage:
<img src="https://user-images.githubusercontent.com/47359683/64884297-f1fdf600-d693-11e9-84f5-a4b7fd92b6bf.png"/>

<h2>Built with</h2>

<ul>
  <li><a href="https://reactjs.org/">React.js</a></li>
  <li><a href="https://redux.js.org/">Redux.js</a></li>
  <li><a href="https://guides.rubyonrails.org/">Ruby on Rails</a></li>
  <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
</ul>

<h2>Deployment</h2>
Hosted on <a href="https://myepsy.herokuapp.com">Heroku</a>

<h2>Getting started</h2>
Refer to the <a href="https://github.com/chinweenie/Full-Stack-Project-Etsy/wiki">wiki</a> for more details of this project!

<h2>Installation</h2>
Start installation

```
git clone https://github.com/chinweenie/Full-Stack-Project-Etsy.git
cd Full-Stack-Project-Etsy
bundle install
npm install
bundle exec rails s
npm run webpack
```
<h2>Technical details</h2>
The navbar shows different button when a user is logged in. The implementation of this involves a check on whether there is a
session id.

```javascript
const mapStateToProps = state => {
    let shopId;
    if (state.session.id){
        shopId = currentUserHasShop(state.session.id, state.entities.users)
    } else {
        shopId = false;
    };

    return {
        navbar: Boolean(state.session.id),
        shopId,
        users: selectAllUsers(state.entities.users),
    }
  
};
```

Also, if a user adds a product(which has already been added before) into the cart, the create action automatically update the quantity of the cart item instead of creating a new cart item with the same product id. The create and update action also checks if the cart item quantity is still within the maximum quantity allowed (based of the availability of the product). 

```ruby
def create
        if check_current_cart(product_id, quantity)
            @cart_item = CartItem.find_by(product_id: product_id, user_id: current_user.id)

            total = @cart_item.quantity + quantity.to_i
            maximum_quantity = Product.find_by(id: product_id).quantity 

            if total > maximum_quantity
                render json: ['Sorry, not enough stock!'], status: 422 
                return 
            else
                if @cart_item.update(quantity: total)
                    render :show
                else
                    render json: @cart_item.errors.full_messages, status: 422
                end
            end
        else
            @cart_item = CartItem.new(cart_item_params)
            @cart_item.user_id = current_user.id
            if @cart_item.save
                render :show
            else
                render json: @cart_item.errors.full_messages, status: 422
            end

        end
    end

    def update
        @cart_item = CartItem.where(user_id: current_user.id, id: params[:id]).first
        if params[:cart_item][:quantity] == '0'
            @cart_item.destroy 
        else

            maximum_quantity = Product.find_by(id: @cart_item.product_id).quantity  
            total = quantity + @cart_item.quantity 

            if quantity > maximum_quantity 
                @cart_item.quantity = maximum_quantity
                @cart_item.save!  
                render :show   

            else         
                if @cart_item.update(cart_item_params)
                    render :show
                else
                    render json: @cart_item.errors.full_messages
                end
            end
            
            
        end
        
    end

```

<h2>Author</h2>
Winnie Chin

<h2>Acknowledgments</h2>
Thank you Andy for providing me user feedbacks throughout the project development.








