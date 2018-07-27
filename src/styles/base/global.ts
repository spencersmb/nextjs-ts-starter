import { injectGlobal } from 'styled-components'
import cssReset from './reset'
import { colors } from './colors'
import toastr from '../modules/toastr'

export default injectGlobal`

  ${cssReset}
  
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700');
  
  body{
    font-family: 'Roboto', sans-serif;
    letter-spacing: .8px;
    text-rendering: optimizeLegibility;
    color: ${colors.darkBlue};
    position: relative;
    
    &.mobileNavOpen{
      overflow-y: hidden;
    }
  }
  
	.etCart-enter {
    transform: translateY(-45%) translateX(-50%);
    opacity: 0;
		transition: all 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }
  
  .etCart-enter.etCart-enter-active {
  	opacity: 1;
		transform: translateY(-50%) translateX(-50%);
  }
  {/* MuST OVERRIDE FOR CHROME FOR SOME REASON */}
  {/* Set the default state in the component styles as well, which in the case would be 100% */}
  .etCart-enter-done{
  	opacity: 1 !important;
  	//transform: translateY(0) !important;
  	transform: translateY(-50%) translateX(-50%) !important;
  }
  
  .etCart-exit {
  	opacity: 0;
    transform: translateY(50%) translateX(-50%);
		transition: all 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }
  
  .etCart-exit.previewApp-exit-active {
    transform: translateX(-5% translateX(-50%));
    opacity: 0;
  }
  
  ${toastr}
`
