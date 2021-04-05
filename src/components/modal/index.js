import React from 'react';
import '../../assets/styles/styles.css'
import ChampionsLateral from '../../assets/img/cuartosdefinal.png'
class Modal extends React.Component {

    modalOff = () => {
        document.getElementsByClassName("modal")[0].style.display = "none"
    }
    render() {
        return (
            <div class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                        <img src={ChampionsLateral}/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" onClick={this.modalOff} class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Modal