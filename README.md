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

Another important feature is the edit and stock item buttons on the 
shop show page. If the current user is the owner of the shop,
those buttons will show up, else, other users who visit the shop
will not be able to see those buttons.

```javascript
  let stockItemButton;
    if ( currentUserId === shop.owner.id ){
        stockItemButton = (
            <div className="stock-edit-button">
                <button className="clickystock-your-shop-button" onClick{this.handleStock}>
                    Stock your shop
                </button>
                <button className="clickyedit-your-shop-button" onClick={this.handleEdit}>
                    Edit your shop
                </button>
            </div>
            
        );
    } else {
        stockItemButton = '';
    };
```

<h2>Author</h2>
Winnie Chin

<h2>Acknowledgments</h2>
Thank you Andy for providing me user feedbacks throughout the project development.








