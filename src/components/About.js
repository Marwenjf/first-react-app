import React, { Component } from 'react';

export default class About extends Component {
    constructor(props){
        super(props);
        this.state={
               title:'Keep your smile',
               skillValue:'',
               contact:{
                   name:'Marwen Jaffel',
                   email:'mjaffel@cni.tn',
                   profile:'images/profile.png'
               },
               skills:[
                 {id:1,value:'Software engeneer'},
                 {id:2,value:'Machines learning'},
                 {id:3,value:'ASP.NET'},
               ]
        }
    }

    setSkillValue=(event)=>{
       this.setState({
         skillValue:event.target.value
       });
    }

    addSkill=(event)=>{
        event.preventDefault();
        let skill={
            id:[...this.state.skills].pop().id+1,
            value:this.state.skillValue
        }
        this.setState({
            skills:[...this.state.skills,skill],
            skillValue:''
        })  
    }

    onDelete=(skill)=>{
        let index = this.state.skills.indexOf(skill);
        let listSkills=[...this.state.skills];
        listSkills.splice(index,1);
        this.setState({
            skills:listSkills
        });
    }

  render() {
    return (
      <div>
          <div className='card'>
              <div className='card-header text-center'>
                <label className='font-weight-bold'>{this.state.title}</label>
              </div>
               <div className='row p-2'>
                   <div className='col col-auto'>
                       <img width={100} src={this.state.contact.profile} alt=''/>
                   </div>
                   <div className='col'>
                       <ul className='list-group'>
                           <li className='list-group-item'>{this.state.contact.name}</li>
                           <li className='list-group-item'>{this.state.contact.email}</li>
                       </ul>
                   </div>
               </div>
          </div>
          <div className='card m-2'>
              <div className='card-header'>Skills</div>
              <div className='card-body'>
                  <form onSubmit={this.addSkill}>
                      <div className='row mb-2'>
                          <div className='col'>
                          <input value={this.state.skillValue} type='text' className='form-control' placeholder='Skill to add' name='skill' onChange={this.setSkillValue}/>
                          </div>
                          <div className='col col-auto'>
                          <button className='btn btn-primary' type='submit'>Add</button>
                          </div>
                      </div>
                  </form>
                <table className='table'>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Skill</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                             this.state.skills.map((skill,index)=>
                                <tr key={skill.id}>
                                    <td>{skill.id}</td>
                                    <td>{skill.value}</td>
                                    <td><button className='btn btn-danger' onClick={()=>this.onDelete(skill)}>X</button></td>
                                </tr>
                             )
                        }
                    </tbody>
                </table>
              </div>
          </div>
      </div>
    );
  }
}
