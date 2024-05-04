import './App.css'
import Message from "./Message";
import UserCard from './UserCard';
import WelcomeMessage from './WelcomeMessage';
function App(){
   return <div className='bg-blue-600 text-xl'><Message />,
   <UserCard/>
   <WelcomeMessage/>
   <p>React js with tailwind</p>
   </div>
   
}
export default App;