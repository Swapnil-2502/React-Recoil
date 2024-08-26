import { useMemo } from 'hono/jsx'
import './App.css'
import { jobsAtom, messagesAtom, networkAtom, notificationAtom, totalnotificationSelector } from './atoms'
import {useRecoilValue , RecoilRoot} from 'recoil'

//, useRecoilState,useSetRecoilState

function App() {
  
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  )
  
}

function MainApp(){
  const networkAtomCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const messagesAtomCount = useRecoilValue(messagesAtom)
  //const [notificationAtomCount,setNotificationAtomCount] = useRecoilState(notificationAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)

  //This is the ugly way of doing as we didnt use useMemo hook which means 
  // Even if all four value are not changed it will recalculate on every rerender
  // First way: using 'useMemo'

  // const totalnotificationCount = useMemo(()=> {
  //   return (networkAtomCount + jobsAtomCount + messagesAtomCount + notificationAtomCount)
  // },[networkAtomCount, jobsAtomCount,messagesAtomCount,notificationAtomCount]) 

  //Second way: using Selector
  const totalnotificationCount = useRecoilValue(totalnotificationSelector)

  return (
    <>
      
        <button>Home</button>
        <button>My Network ({networkAtomCount >= 100 ? "99+" : networkAtomCount})</button>
        <button>Jobs ({jobsAtomCount})</button>
        <button>Messages ({messagesAtomCount})</button>
        <button>Notifications ({notificationAtomCount})</button>
        <button>Profile(Total:{totalnotificationCount})</button>

        {/* <ButtonUpdater /> */}
        {/* <button onClick={()=>{
          setNotificationAtomCount(c=>c+1)
        }}
        >Profile</button> */}
      
    </>
  )
}

// function ButtonUpdater(){
  
//   const setNotificationAtomCount = useSetRecoilState(notificationAtom)
//   return (
//     <button onClick={()=>{
//       setNotificationAtomCount(c=>c+1)
//     }}
//     >Profile</button>
//   )
// }

export default App
