import React, {Component} from "react";

class People extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: '',
            person: {},
            personImg: '',
            personAge: '',
            personLoc: {},
            personEmail: '',
            personPhone: '',
            personCell: '',
            loading1: false
        }
    }
    
    componentDidMount() {
        this.setState({loading: true})
        this.setState({loading1: true})
        fetch("https://forbes400.herokuapp.com/api/forbes400/?limit=1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    character: data[0].person.name,
                    picture: data[0].squareImage,
                    bios:data[0].bios,
                    header: data[0].name
                })
                console.log(data[0].name)
                console.log(data[0].bios)
            })
            fetch("https://api.randomuser.me/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading1:false,
                    personImg: data['results'][0]['picture']['thumbnail'],
                    person: data['results'][0]['name'],
                    personAge: data['results'][0]['dob']['age'],
                    personLoc: data['results'][0]['location'],
                    personEmail: data['results'][0]['email'],
                    personPhone: data['results'][0]['phone'],
                    personCell: data['results'][0]['cell'],
                })
                console.log(data['results'][0]['gender'])
                console.log(data['results'][0]['picture']['thumbnail'])
            })
    }
   
    render(){
        const text = this.state.loading ? 'loading...' : this.state.character;
        const image = this.state.loading ? 'loading...' : <legend style={{marginLeft:'auto', padding:'10px'}}><img src={this.state.picture} alt="" style={{borderRadius:'50%', height: 'auto', width: '50px'}} /></legend>;
        const bio = this.state.loading ? 'loading...' : <p style={{textAlign:'center', padding:'10px', margin:"20px"}}>{this.state.bios}</p>; 
        const person2 = this.state.loading1 ? 'loading...' : 
           <div style={{textAlign:'left'}}>{this.state.person.title} {this.state.person.first} {this.state.person.last}, {this.state.personAge} 
           <div>{this.state.personEmail}</div>
           <div>{this.state.personPhone}, {this.state.personCell}</div>
           <small>{this.state.personLoc.city}, {this.state.personLoc.state}, {this.state.personLoc.country}</small></div>
           ;
           const imgp = this.state.loading1 ? '...' :  <legend style={{marginLeft:'auto', padding:'10px'}}><img src={this.state.personImg} alt="" style={{borderRadius:'50%'}} /></legend>;
        return(
           <div style={{width:'70%'}}>
               <h3>{this.state.header}</h3>
               <small>And first in the list is:</small>
           <fieldset style={{border:'white, solid', borderRadius:'14px', marginBottom:'20px'}}>
               {image}
               {text}
               {bio}     
           </fieldset>
           <h3>Randome Person</h3>
           <fieldset style={{border:'white, solid', borderRadius:'14px'}}>
               {imgp}
               {person2}
           </fieldset>  
            </div> )
    }
    
}

export default People