// import React, { useState, useEffect } from "react"
// import * as sessionActions from '../../store/session'
// import { clearSaves } from "../../store/savedRecipes"
// import { closeModal } from "../../store/modals"
// import SideModal from "./SideModal"
// import { useSelector, useDispatch } from "react-redux"

// export const ProfileButton = ({ user }) => {
//     const dispatch = useDispatch()
//     const modalStates = useSelector(store => store.modals)

//     // const [showMenu, setShowMenu] = useState(false)

//     // const openMenu = () => {
//     //     if (showMenu) return;
//     //     setShowMenu(true)
//     // }

//     // useEffect(() => {
//     //     if (!showMenu) return;

//     //     const closeMenu = () => {
//     //         setShowMenu(false)
//     //     }

//     //     document.addEventListener('click', closeMenu)
//     //     return () => document.removeEventListener('click', closeMenu)
//     // }, [showMenu])

//     // const logout = (e) => {
//     //     e.preventDefault()
//     //     dispatch(clearSaves())
//     //     dispatch(sessionActions.logout())
//     // }

//     return (
//         <>
//           <svg className="navbar-profile-icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM18.998 16.571A1.06 1.06 0 0 0 19 16.5c0-1.38-3.686-3-7-3s-7 1.62-7 3c0 .024 0 .048.002.071H5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.429h-.002Z" fill="#121212"></path></svg>
//           {/* {showMenu && ( */}
//               <SideModal />
//             {/* // <ul className="profile-dropdown">
//             //   <li>{user.email}</li>
//             //   <li>
//             //     <button onClick={logout}>Log Out</button>
//             //   </li>
//             // </ul> */}
//           {/* )} */}
//         </>
//       );
// }

// export default ProfileButton
