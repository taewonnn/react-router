import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Videos () {
  const [text, setText] = useState();

  // useNavigate
  const navigate = useNavigate();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
  }


  return (
    <div>
      Videos
      <form>
        <input type='text' placeholder='video id' value={text} onChange={handleChange} />
      </form>
    </div>
  )
}

export default Videos;

