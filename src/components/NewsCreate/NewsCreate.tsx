import * as React from 'react';
import { connect } from 'react-redux';
import { createNews } from '../../redux/actions/news';

interface INewsCreateProps {
  createNews: Function
}
const NewsCreate = ({ createNews }: INewsCreateProps) => {
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createNews({
      title: title.trim(),
      date: new Date(),
      text: text.trim()
    })
  }

  return (
    <div className="news-create">
      <h2>Create news</h2>
      <form onSubmit={onSubmit}>
        <div className="input">
          <input 
            id="title" 
            name="title" 
            type="text" 
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value.trim())
            }}
          />
        </div>
        <div className="input">
          <textarea 
            name="text" 
            id="text" 
            cols={30} 
            rows={10} 
            placeholder="Text..."
            onChange={(event) => {
              setText(event.target.value.trim())
            }}>   
            </textarea>
        </div>
        
        <input className="btn" type="submit" value="Create"/>
      </form>
    </div>
    
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNews: (news) => dispatch(createNews(news))
  }
}

export default connect(null, mapDispatchToProps)(NewsCreate);