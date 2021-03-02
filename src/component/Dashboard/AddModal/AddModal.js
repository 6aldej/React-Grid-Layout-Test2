import React from 'react';
import { Button, Header, Image, Modal, Input} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import chartIMG from '../../../img/pie-chart.svg';
import tableIMG from '../../../img/table.svg';

const AddModal = ({open, onEditOpenModal, currentType, onAddItem, onValueName}) => {
    
    return (
      <Modal
        onClose={() => onEditOpenModal(false)}
        onOpen={() => onEditOpenModal(true)}
        open={open}
      >
        <Modal.Header>Задайте необходимую информацию</Modal.Header>
        <Modal.Content image>
          {currentType==="График" && <Image size='medium' src={chartIMG} wrapped />}
          {currentType==="Таблица" && <Image size='medium' src={tableIMG} wrapped />}
          <Modal.Description>
            <Header>Выберите параметры</Header>
            <Input placeholder='название виджета' onChange={onValueName}/>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => onEditOpenModal(false)}>
            Отменить
          </Button>
          <Button
            content="Добавить"
            labelPosition='right'
            icon='checkmark'
            onClick={() => onAddItem(currentType)}
            positive
          />
        </Modal.Actions>
      </Modal>
    )
}

export default AddModal;