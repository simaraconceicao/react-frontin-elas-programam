import { render, screen, fireEvent } from "@testing-library/react"
import List from './List'

describe('List', () => {
  it('should be able to add a task', async () => {
    render(<List />);

    const taskInput = screen.getByPlaceholderText('Adicionar nova tarefa')
    const addTaskButton = screen.getByTestId('add-task')

    fireEvent.change(taskInput, {
      target: {
        value: 'Estudar react'
      }
    })
    fireEvent.click(addTaskButton)

    const addedFirstTaskTitle = screen.getByText('Estudar react')

    expect(addedFirstTaskTitle).toHaveTextContent('Estudar react')
    expect(addedFirstTaskTitle.parentElement).not.toHaveClass('completed')

    fireEvent.change(taskInput, {
      target: {
        value: 'Estudar javascript'
      }
    });
    fireEvent.click(addTaskButton);

    const addedSecondTaskTitle = screen.getByText('Estudar javascript')

    expect(addedFirstTaskTitle).toBeInTheDocument();
    expect(addedFirstTaskTitle).toHaveTextContent('Estudar react')
    expect(addedFirstTaskTitle.parentElement).not.toHaveClass('completed')

    expect(addedSecondTaskTitle).toHaveTextContent('Estudar javascript')
    expect(addedSecondTaskTitle.parentElement).not.toHaveClass('completed')
  })

  it('should not be able to add task empty', () => {
    render(<List />);

    const addTaskButton = screen.getByTestId('add-task');

    fireEvent.click(addTaskButton);

    expect(screen.queryByTestId('task')).not.toBeInTheDocument();

    const taskInput = screen.getByPlaceholderText('Adicionar nova tarefa');

    fireEvent.change(taskInput, {
      target: {
        value: 'Estudar Javascript'
      }
    });
    
    fireEvent.click(addTaskButton);

    const addedFirstTaskTitle = screen.getByText('Estudar Javascript');

    expect(addedFirstTaskTitle).toHaveTextContent('Estudar Javascript');
  })

  it('should be able to remove a task', async () => {
    render(<List />);

    const taskInput = screen.getByPlaceholderText('Adicionar nova tarefa');
    const addTaskButton = screen.getByTestId('add-task');

    fireEvent.change(taskInput, {
      target: {
        value: 'Estudar React'
      }
    });
    fireEvent.click(addTaskButton);

    fireEvent.change(taskInput, {
      target: {
        value: 'Estudar css'
      }
    });
    fireEvent.click(addTaskButton);

    const addedFirstTaskTitle = screen.getByText('Estudar React');
    const addedSecondTaskTitle = screen.getByText('Estudar css');

    expect(addedFirstTaskTitle).toBeInTheDocument();
    expect(addedSecondTaskTitle).toBeInTheDocument();

    const [addedFirstTaskRemoveButton] = screen.getAllByTestId('remove-task');

    fireEvent.click(addedFirstTaskRemoveButton);

    expect(addedFirstTaskTitle).not.toBeInTheDocument();
    expect(addedSecondTaskTitle).toBeInTheDocument();
  })

  it('should be able to check a task', () => {
    render(<List />);

    const taskInput = screen.getByPlaceholderText('Adicionar nova tarefa');
    const addTaskButton = screen.getByTestId('add-task');

    fireEvent.change(taskInput, {
      target: {
        value: 'Estudar React'
      }
    });
    fireEvent.click(addTaskButton);

    fireEvent.change(taskInput, {
      target: {
        value: 'Estudar Js'
      }
    });
    fireEvent.click(addTaskButton);

    const [addedFirstTask, addedSecondTask] = screen.getAllByTestId('task');

    if (addedFirstTask.firstChild) {
      fireEvent.click(addedFirstTask.firstChild)
    }

    expect(addedFirstTask).toBeInTheDocument();
    expect(addedFirstTask).toHaveClass('completed');

    expect(addedSecondTask).toBeInTheDocument();
    expect(addedSecondTask).not.toHaveClass('completed');
  })

})

