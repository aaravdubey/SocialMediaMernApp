import { Box } from '@mui/material';
import { styled } from '@mui/system'

// a styled component - used to reuse CSS 
const FlexBetween = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

export default FlexBetween;