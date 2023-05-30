import { Stack } from '@mui/material'
import { logo } from '../../utils/constants'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {
	return (
		<Stack
			className='navbar'
			direction="row"
			p={2}
			alignItems="center"
			sx={{position:"sticky", background:"#000", top:0, justifyContent:"space-between"}} 
			>
			
			<Link className='main-logo'  to='/' style={{display:'flex', alignItems:'center'}}>
				<img src={logo} alt="logo" height={45} m={0} />
				<h2  style={{color:'#fff', fontFamily:'sans-serif'}}>YouTube</h2>
			</Link>
			<SearchBar />
		</Stack>
	)
}

export default Navbar