//rafce
import React from 'react'
import { Menu } from './restaurant'

interface OwnProps extends Menu {

}
const BestMenu:React.FC<OwnProps> = () => {
  return (
    <div>BestMenu</div>
  )
}

export default BestMenu