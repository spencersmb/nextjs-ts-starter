import {css} from 'styled-components'
import {colors} from '../base/colors'
import {media} from '../base/mq'

export default css`
.redux-toastr {
  .bottom-right {
    width: 100%;
    
    ${media.tablet`
      width: 350px;
    `}
  }
  .toastr{
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    & > div {
      // target first wrapper div
      display: flex;
      flex-direction: row;
      
    }
    .rrt-left-container{
      display: flex;
      align-items: center;
      padding-right: 20px;
      .rrt-holder{
        background: #fff;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin:0 auto;
        position: initial;
        
        svg{
          width: 20px !important;
          height: 20px !important;
        }
      }
      .toastr-icon{
      	margin-top: 1px;
      }
    }
    .rrt-middle-container{
				margin-left: 40px;
      .rrt-title{
        font-size: 18px;
      }
      .rrt-text{
        font-size: 14px;
        font-weight: 300;
      }
    }
    &.rrt-error{
      background-color: ${colors.red};
      svg{
        path{
          transform: translateX(4.5px)translateY(4px);
          fill: ${colors.red};
        }
      }
    }
    &.rrt-success{
      background-color:  ${colors.green};
      
      svg{
        path{
          fill: ${colors.green};
        }
      }
      
    }
  }
}
`
