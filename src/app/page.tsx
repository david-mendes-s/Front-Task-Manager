'use client'
import GlobalStyle from './GlobalStyles';
import {BsFillSendFill, BsX} from 'react-icons/bs';
import {BiTrash, BiEditAlt} from 'react-icons/bi';


import { AddTodoList, Button, Container, 
  ContentTask, Description, GroupButton, Item, SubTask, Task, Title, Text, TodoList, ContainerModal, CloseModal, Form } from '@/app/styles/Task';
import { FormEvent, useEffect, useRef, useState } from 'react';

import api from '@/app/lib/api';
import ModalTask from './components/Modal';



interface Task {
  id:string | undefined;
  description: string | undefined;
  name: string | undefined;
}

interface SubTask {
  id:string;
  description: string;
  task_id:string;
  completed: boolean;
}

interface ResponseSubTask {
  id:string | undefined;
  description: string | undefined;
}

interface ResponseTask {
  id?:string | undefined;
  description: string | undefined;
  name: string | undefined;
}

export default function Home() {

  

  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();

  const [nameUpdate, setNameUpdate] = useState<string>();
  const [descriptionUpdate, setDescriptionUpdate] = useState<string>();

  const [subTask, setSubTask] = useState<string>();
  const [listSubTask, setListSubTask] = useState<SubTask[]>([]);

  const [tasks, setTasks] = useState<Task[]>([]);
  const [refreshCounter, setRefreshCounter] = useState(0);

  const [itemTask, setItemTask] = useState<Task>();

  const [modalIsOpen, setIsOpen] = useState(false);

  const [active, setActive] = useState<string>("");
      
  function openModal(id:String) {
      setIsOpen(true);
      const t = tasks.find(task => task.id === id);

      setItemTask(t);
  }

  function closeModal() {
      setIsOpen(false);
  }

  useEffect(()=> {
    handleGetTasks();
  },[]);

  async function handleCreateTask({name, description}:ResponseTask){
    await api.post('/tasks/create/tasks', {
      name, description
    });

    setRefreshCounter(refreshCounter + 1);
    setDescription("");
    setName("");
  }

  async function handleGetTasks(){
    const response = await api.get('/tasks/tasks-all');

    setTasks(response.data);
  }

  async function handleGetSubTasks(){
    const response = await api.get(`/todo-list/todo-list-all`);

    console.log(response.data)

    setListSubTask(response.data);
  }

  async function handleDeleteTasks(id:String){
    await api.delete(`/tasks/delete-task/${id}`);
    setRefreshCounter(refreshCounter - 1);
  }

  async function handleUpdateTasks({id, description, name}:ResponseTask){
    
    await api.put('/tasks/update-task', {id, name, description});
    
    setItemTask({id, name, description});

    setDescriptionUpdate("");
    setNameUpdate("");
   
    setRefreshCounter(refreshCounter + 1);
  }

  async function handleCreateSubTask({id, description}:ResponseSubTask){
    console.log(description+" - "+id);

    await api.post("/todo-list/create/todo-list-task", {task_id: id, description})


    setRefreshCounter(refreshCounter - 1);
 
    setSubTask("");

  }

  async function handleUpdateTask(id:string){

    handleGetSubTasks();

    const item = listSubTask.find(items => items.id === id);


    let verify = item?.completed;

    if(item?.completed === false){
      verify = true
    }else if(item?.completed === true){
      verify = false
    }


    await api.put("/todo-list/update-todo-list", 
      {id, completed: verify});

      setRefreshCounter(refreshCounter + 1);
    
  }

  useEffect(()=> {
    handleGetTasks();
    handleGetSubTasks();
  },[refreshCounter]);

 
  return (
    <>
      <GlobalStyle />

      <Button>
        <div>
          <input 
          type="text" 
          placeholder='Adicionar Task'
          value={name}
          onChange={e => setName(e.target.value)}
        />
          
          <button onClick={()=> handleCreateTask({name, description})}>
            <BsFillSendFill size={18} color={'#fff'}/>
          </button>
        </div>

        <input 
        type="text" 
        placeholder='Descrição...'
        value={description}
        onChange={e => setDescription(e.target.value)}
        />
        
      </Button>

      <Container>
        {tasks.map((task) => (
          <Task key={String(task.id)}>
          <ContentTask>
            <Title>{task.name}</Title>
            
            <GroupButton>
                <button onClick={()=> openModal(task.id!)}>
                  <BiEditAlt size={22} color={'#fff'}/>
                </button>

                <button onClick={()=> handleDeleteTasks(task.id!)}>
                  <BiTrash size={18} color={'#fff'}/>
                </button>
            </GroupButton>  
          </ContentTask> 

          <Description>
            <p>{task.description}</p>
          </Description>

          <TodoList >
            {listSubTask.filter(item => item.task_id === task.id).map(item => (
              <SubTask key={String(item.id)}
                onClick={() => handleUpdateTask(item.id)}
              >
                <Item className={item.completed === true ? 'active' : ''}></Item>
                <Text className={item.completed === true ? 'active' : ''}>{item.description}</Text>
              </SubTask>
            ))}
          </TodoList>

          {/* <AddTodoList>
            <form onSubmit={handleCreateSubTask}>
              <input 
                type="text" 
                placeholder='Adicionar SubTarefa'
                ref={nameInputRef}
                onChange={e =>  setSubTask(e.target.value)}
              />
              <button type='submit' value={task.id}>
                <BsFillSendFill size={18} color={'#325BFF'}/>
              </button>
            </form>
          </AddTodoList> */}

        </Task>
        ))}

      </Container>

      <ModalTask closeModal={closeModal} modalIsOpen={modalIsOpen}>
        <CloseModal onClick={()=> closeModal()}>
            <BsX size={32} />
        </CloseModal>
        <ContainerModal>
          <div>
            <h3>{itemTask?.name}</h3>
            <p>{itemTask?.description}</p>

            <ul>
              {listSubTask.filter(item => item.task_id === itemTask?.id).map(item => (
                <li key={item.id}
                onClick={() => handleUpdateTask(item.id)}
                >
                  <div className={item.completed === true ? 'activeDark' : ''}></div>
                  <p className={item.completed === true ? 'activeDark' : ''}>{item.description}</p>
                </li>
              ))}
              
              
            </ul>

            <div className='addItem'>
              <input 
                type="text" 
                placeholder='Adicionar SubTarefa'
                value={subTask}
                onChange={e => setSubTask(e.target.value)}
              />
              
              <button onClick={()=> handleCreateSubTask({id:itemTask?.id, description: subTask})}>
                <BsFillSendFill size={18} color={'#585D62'}/>
              </button>
            </div>

          </div>
          <Form>
            <input 
              type="text" 
              placeholder='Título da Task'
              value={nameUpdate}
              onChange={e => setNameUpdate(e.target.value)}
            />
              
            <input 
              type="text" 
              placeholder='Descrição'
              value={descriptionUpdate}
              onChange={e => setDescriptionUpdate(e.target.value)}
            />
            <button
              onClick={()=> handleUpdateTasks({id: itemTask?.id, name: nameUpdate, description: descriptionUpdate})}
            >Atualizar Task</button>
          </Form>
        </ContainerModal>
      </ModalTask>
     
    </>
  )
}
