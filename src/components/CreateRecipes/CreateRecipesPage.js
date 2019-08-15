import React, {Component} from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form"
import FormGroup from "react-bootstrap/es/FormGroup";
import logo from "../../logo.svg";
import SessionExpired from "../SessionExpired";


class CreateRecipesPage extends Component {
   state = {
      recipes: [
         {
            recipeName: 'Chocolate Chip Cookies',
            ingredients: ['Eggs', 'Sugar', 'Butter', 'Chocolate', 'Cream'],
         }, {
            recipeName: 'Vanilla Cake',
            ingredients: ['Vanilla', 'Cream', 'Sugar', 'Butter', 'Flour', 'Chocolate'],
         },
         {
            recipeName: 'Cheese Cake',
            ingredients: ['Cheese', 'Biscuits', 'Butter', 'Flour', 'Vanilla', 'Chocolate', 'Cream'],
         }
      ],
      baseRecipes: [
         {
            recipeName: 'Chocolate Chip Cookies',
            ingredients: ['Eggs', 'Sugar', 'Butter', 'Chocolate', 'Cream']
         }, {
            recipeName: 'Vanilla Cake',
            ingredients: ['Vanilla', 'Cream', 'Sugar', 'Butter', 'Flour', 'Chocolate']
         },
         {
            recipeName: 'Cheese Cake',
            ingredients: ['Cheese', 'Biscuits', 'Butter', 'Flour', 'Vanilla', 'Chocolate', 'Cream']
         }
      ],
      showAdd: false,
      showEdit: false,
      currentIndex: 0,
      newestRecipe: {recipeName: '', ingredients: []},
      isLoading: true,
      isVerified: (this.props.state === undefined)? false : this.props.state.isVerified,
      token: '',
      JWTtoken: (this.props.state === undefined)? '' : this.props.state.JWTtoken,
   };

   deleteRecipe(index){
      let recipes = this.state.recipes.slice();
      recipes.splice(index, 1);
      this.setState({recipes});
      localStorage.setItem('recipes', JSON.stringify(recipes));
   }

   updateNewRecipe(recipeName, ingredients){
      this.setState({
         newestRecipe: {recipeName: recipeName, ingredients: ingredients}
      })
   }

   close = () => {
      if(this.state.showAdd){
         this.setState({showAdd: false});
      } else if (this.state.showEdit){
         this.setState({showEdit: false});
      }
   };

   open = (state, currentIndex) => {
      if(state === "showEdit"){
         this.setState({
            showEdit: true,
            currentIndex: currentIndex,
         });
      } else {
         this.setState({
            showAdd: true,
            currentIndex: currentIndex,
         })
      }
   };

   saveNewRecipe(){
      let recipes = this.state.recipes.slice();
      recipes.push({recipeName: this.state.newestRecipe.recipeName, ingredients: this.state.newestRecipe.ingredients});
      this.setState({recipes});
      this.setState({newestRecipe: {recipeName: '', ingredients: []}});
      localStorage.setItem('recipes', JSON.stringify(recipes));
      this.close();
   }

   updateRecipeName(recipeName, currentIndex) {
      let recipes = this.state.recipes.slice();
      recipes[currentIndex] = {recipeName: recipeName, ingredients: recipes[currentIndex].ingredients};
      this.setState({recipes});
      localStorage.setItem('recipes', JSON.stringify(recipes));
   }

   updateIngredients(ingredients, currentIndex){
      let recipes = this.state.recipes.slice();
      recipes[currentIndex] = {recipeName: recipes[currentIndex].recipeName, ingredients: ingredients};
      this.setState({recipes});
      localStorage.setItem('recipes', JSON.stringify(recipes));
   }

   reset(){
      this.setState({
         recipes: this.state.baseRecipes
      });
      localStorage.setItem('recipes', JSON.stringify(this.state.baseRecipes));
   }

   componentDidMount() {
      this.setState({isLoading: false});

      const token = (this.props.state === undefined)? false : this.props.state.token;
      if(token){
         //verify the token
         fetch("http://localhost:3001/users/verify?token=" + token, {method: 'GET', headers:{'auth-token': this.state.JWTtoken}})
            .then(res => res.json())
            .then(json => {
               console.log(json);
               if(json.success){
                  this.setState({
                     token: token,
                     isVerified: true,
                     JWTtoken: json.JWTtoken,
                  });
                  this.props.updateCookies(json.JWTtoken);
                  console.log(this.state);
               } else {
                  this.setState({
                     isVerified: false,
                  })
               }
            })
      }
      if (localStorage.getItem('recipes') === null){
         localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
      } else {
         this.setState({
            recipes: JSON.parse(localStorage.getItem('recipes')),
            });
      }
   }


   render() {
      const {recipes, newestRecipe, showAdd, showEdit, currentIndex, isLoading, isVerified} = this.state;
      const {jumpToLogIn} = this.props;

      if (isLoading) {
         return (
            <div><p>Loading...</p></div>
         )
      } else {

         if (!isVerified) {
            return <SessionExpired jumpToLogIn={jumpToLogIn}/>
         }

         return (
            <div className="container">
               <div className="row">
                  <div className="col">
                     {recipes.length > 0 && (
                        <div>
                           <Accordion className="text-center">
                              {recipes.map((recipe, index) => (
                                 <Card className="my-2" key={index}>
                                    <Card.Header>
                                       <Accordion.Toggle as={Button} eventKey={index}>
                                          {recipe.recipeName}
                                       </Accordion.Toggle>
                                    </Card.Header>

                                    <Card.Body>
                                       <Accordion.Collapse eventKey={index}>
                                          <div className="container">
                                             <div className="row">
                                                <div className="col">
                                                   <ol className="list-group list-group-flush text-center col-6 my-5">
                                                      {recipe.ingredients.map((item) => (
                                                         <li className="" key={item}>{item} </li>
                                                      ))}
                                                   </ol>
                                                </div>
                                                <div className="col">
                                                   <img src={logo} alt="store" className=""/>
                                                </div>
                                             </div>
                                             <div className="row">
                                                <ButtonToolbar className="center">
                                                   <Button className="mx-3" onClick={(event => this.deleteRecipe(index))}> Delete
                                                      Recipe </Button>
                                                   <Button className="mx-3" onClick={(event) => this.open("showEdit", index)}>Edit
                                                      Recipe</Button>
                                                </ButtonToolbar>
                                             </div>
                                          </div>
                                       </Accordion.Collapse>
                                    </Card.Body>
                                 </Card>
                              ))}
                           </Accordion>
                           <Modal show={showEdit} onHide={this.close} centered size="lg"
                                  aria-labelledby="example-custom-modal-styling-title" style={{opacity: 1}}>
                              <Modal.Header closeButton>
                                 <Modal.Title className="my-2 text-centered">Edit Recipe</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                 <FormGroup>
                                    <Form.Label className="my-1">Recipe Name</Form.Label>
                                    <Form.Control className="form-control mb-4" type="text"
                                                  value={recipes[currentIndex].recipeName}
                                                  placeholder="Enter Text"
                                                  onChange={(event) => this.updateRecipeName(event.target.value, currentIndex)}/>
                                    <Form.Label className="my-1">Ingredients (Separate by Comma)</Form.Label>
                                    <Form.Control className="mb-4" type="textarea"
                                                  value={recipes[currentIndex].ingredients}
                                                  placeholder="Enter Ingredients (Separate by Comma)"
                                                  onChange={(event) => this.updateIngredients(event.target.value.split(","), currentIndex)}/>
                                 </FormGroup>
                              </Modal.Body>
                              <Modal.Footer>
                                 <Button onClick={(event) => this.close()}>Edit</Button>

                              </Modal.Footer>
                           </Modal>
                        </div>

                     )}
                  </div>
               </div>


               <Modal show={showAdd} onHide={this.close} centered size="lg"
                      aria-labelledby="example-custom-modal-styling-title" style={{opacity: 1}}>
                  <Modal.Header className="text-centered text-capitalized" closeButton>
                     <Modal.Title className="my-2 text-centered">Add Recipe</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                     <FormGroup controlid="formBasicText">
                        <Form.Label className="my-1">Recipe Name</Form.Label>
                        <Form.Control className="mb-4" type="text" value={newestRecipe.recipeName}
                                      placeholder="Enter Recipe Name"
                                      onChange={(event) => this.updateNewRecipe(event.target.value, newestRecipe.ingredients)}>
                        </Form.Control>
                        <Form.Label className="my-1">Ingredients (Separate by Comma)</Form.Label>
                        <Form.Control className="mb-4" type="textarea" value={newestRecipe.ingredients}
                                      placeholder="Enter Ingredients (Separate by Comma)"
                                      onChange={(event) => this.updateNewRecipe(newestRecipe.recipeName, event.target.value.split(","))}>
                        </Form.Control>
                     </FormGroup>
                  </Modal.Body>
                  <Modal.Footer>
                     <Button onClick={(event) => this.saveNewRecipe()}>Save</Button>

                  </Modal.Footer>
               </Modal>

               <div className="row my-4">
                  <div className="col text-center">
                     <Button className="m-2" bsstyle="primary" onClick={(event) => this.open("showAdd", currentIndex)}>Add
                        Recipe</Button>
                     <Button className="m-2" bsstyle="primary" onClick={(event) => this.reset()}>Reset</Button>
                  </div>
               </div>
            </div>
         );
      }
   }
}

export default CreateRecipesPage;