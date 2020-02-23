import React from 'react';
import s from './ProfileInfo.module.css';




class ProfileStatus extends React.Component {
  state = { //local state
    editMode: false,
    state: this.props.status
  }

  activateEditMode = () => {//метод который мы визиваем колбеком в onDoubleClick
    this.setState( {//перезаписывем local state (асинхронныо)
      editMode: true
    } );
  }

  deactivateEditMode = () => {//метод который мы визиваем колбеком в onDoubleClick
    this.setState( {//перезаписывем local state (асинхронныо)
      editMode: false
    } );

    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    }); 
  }


  componentDidUpdate(prevProps, prevState){

    if(prevProps.status !== this.props.status) { //перевираем ли статус изменился
      this.setState({
        status: this.props.status //засинхранизируем status
      });
    }
    
  }


  //onBlur - визивается когда фокус в елементе, а потом фокус с елемента уходит
 render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={ this.activateEditMode }>{this.props.status || "-----" }</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode } value={this.state.status} />
          </div>
        }
      </div>
    );

 }

}


export default ProfileStatus;