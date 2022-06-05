import React from 'react'
import { ChevronRightIcon} from '@chakra-ui/icons';
import { Box,Text } from '@chakra-ui/react';
import styles from './bottom.module.css';
const Bottom = () => {
  return (
    <div className={styles.bottom}>
<hr />
<Box display="flex" alignItems="center">
  <img src="asset/fav.svg" alt="" /><ChevronRightIcon w={6} h={8}/>
  <Text  marginLeft="12px">Apple Store Online</Text>
</Box>

<span style={{lineHeight:"4"}}>More ways to shop: <span style={{color:"blue"}}>Find an Apple Store or other retailer</span> near you. Or call 1-800-MY-APPLE.</span>
<div className={styles.bottom_copyright}>
<span>Copyright @ 2022 Apple Inc. All rights reserved.</span>
<div className={styles.bottom_copyright_term}>
  <span>Privacy</span>

  <span>Terms of Use</span>

<span>  Sales and Refunds</span>

<span>Legal</span>

<span>Site Map</span>
</div>
<div className={styles.bottom_copyright_term_last}>United States</div>
</div >
    </div>
  )
}

export default Bottom