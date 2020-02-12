import React from 'react';
import s from './ProfileInfo.module.css';




class ProfileStatus extends React.Component {

  state = { //local state
    editMode: false
  }

  activateEditMode() {//метод который мы визиваем колбеком в onDoubleClick
    this.setState( {//перезаписывем local state (асинхронныо)
      editMode: true
    } )
  }

  deactivateEditMode() {//метод который мы визиваем колбеком в onDoubleClick
    this.setState( {//перезаписывем local state (асинхронныо)
      editMode: false
    } )
  }


  //onBlur - визивается когда фокус в елементе, а потом фокус с елемента уходит
 render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={ this.activateEditMode.bind(this) }>{this.props.status}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input autoFocus={true} onBlur={ this.deactivateEditMode.bind(this) } value={this.props.status} />
          </div>
        }
      </div>
    );

 }

}


export default ProfileStatus;