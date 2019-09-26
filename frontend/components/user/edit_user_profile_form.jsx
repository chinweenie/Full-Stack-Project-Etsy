import React from 'react';
import { Link } from 'react-router-dom';

class EditUserProfleForm extends React.Component {
    constructor(props){
        super(props);
        this.state = Object.assign({
            id: '',
            fname: '',
            gender: '',
            city: '',
            birthday: '',
            about: '',
            imageUrl: undefined,
            imageFile: undefined
        }, this.props.user);
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.removeProfilePicture = this.removeProfilePicture.bind(this);
    };

    handleSubmit(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append('user[fname]', this.state.fname);
        formData.append('user[id]', this.state.id);
        formData.append('user[gender]', this.state.gender);
        formData.append('user[city]', this.state.city);
        formData.append('user[birthday]', this.state.birthday);
        formData.append('user[about]', this.state.about);

        if (this.state.imageFile){
            formData.append('user[profile_pic]', this.state.imageFile)
        };


        this.props.updateUser(formData);
        this.props.fetchAllUsers();
        this.props.history.push(`/users/${this.state.id}`);
    }

    handleFile(event){
        const file = event.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({
                imageFile: file,
                imageUrl: fileReader.result
            })
            
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    };

    update(field){
        return event => {
            this.setState({[field]: event.target.value})
        };
    };

    removeProfilePicture(event){
        event.preventDefault();
        this.setState({imageFile: undefined, imageUrl: undefined});
    }
    
    render(){
        const preview = this.state.imageUrl ? <img src={this.state.imageUrl}/> : '';
        let {user} = this.props
        return (
            <div className="user-profile-edit">
                <div className="header-section">
                    <div className="title">
                        <h3>Your Public Profile</h3>
                        <p>Everything on this page can be seen by anyone</p>
                    </div>
                    <Link to={`/users/${user.id}`} className="btn-block">View Profile</Link>
                </div>
                <form onSubmit={this.handleSubmit} >

                    <div className="section">
                        <div className="label">
                            Profile Picture
                        </div>
                        
                        <div className="profile-pic">
                            {preview}
                        </div>
                    
                        <input type="file" onChange={this.handleFile} id="profile-picture" />
                        <button className="normal-button" onClick={this.removeProfilePicture}>Remove picture</button>
                        
                    </div>

                    <div className="section">
                        <div className="label">
                            Your Name
                        </div>
                        <input type="text" value={this.state.fname} id="name" onChange={this.update('fname')} />
                    </div>

                    <div className="section">
                        <div className="label">
                            Gender
                        </div>
                        <div className="gender">
                            <div>
                                <label htmlFor="female">Female</label>
                                <input type="radio" checked={this.state.gender === 'Female'} value='Male' value='Female' id="gender" onChange={this.update('gender')} />
                            </div>

                            <div>
                                <label htmlFor="male">Male</label>
                                <input type="radio" checked={this.state.gender === 'Male'} value='Male' id="gender" onChange={this.update('gender')} />
                            </div>

                            <div>
                                <label htmlFor="other">Other</label>
                                <input type="radio" checked={this.state.gender === 'Other'} value='Male' value='Other' id="gender" onChange={this.update('gender')} />
                            </div>

                            
                            
                        </div>
                        
                    </div>

                    <div className="section">
                        <div className="label">
                            City
                        </div>
                        <input type="text" value={this.state.city} onChange={this.update('city')} id="city" />
                    </div>

                    <div className="section">
                        <div className="label">
                            Birthday
                        </div>
                        <input type="date" value={this.state.birthday} onChange={this.update('birthday')} id="birthday" />
                    </div>

                    <div className="section">
                        <div className="label">
                            About
                            <p>Tell people a little about yourself.</p>
                        </div>
                        <textarea value={this.state.about} id="about" onChange={this.update('about')} cols="30" rows="10"></textarea>
                        
                    </div>

                    <button className="clicky">Save Changes</button>
                </form>
            </div>
            
                
        )
    };
}

export default EditUserProfleForm;