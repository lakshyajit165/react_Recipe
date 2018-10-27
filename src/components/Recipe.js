import React from 'react';

class Recipe extends React.Component{


    render(){
        console.log(this.props);
        return(
            <div className="container text-center">
                <br/>
                    <h2>Looks delicious isn't it?</h2>
                <hr/>
                <br/>
                <div className="card col-lg-6 mx-auto">
                    <img className="card-img-top img-fluid" src={this.props.location.state.recipe_img} alt="Card image cap"/>
                    <div className="card-body">
                        <h4 className="card-text">{this.props.location.state.recipe}</h4>
                        <p className="lead"><b>Publisher: </b>{this.props.location.state.publisher}</p>
                        <p className="lead"><b>Social Rank: </b>{Math.floor(this.props.location.state.rank)}</p>
                        <p className="lead"><b>Source: </b>{this.props.location.state.source}</p>
                    </div>
                    
                </div>
                <br/>
            </div>
            
        );
    }
}

export default Recipe;