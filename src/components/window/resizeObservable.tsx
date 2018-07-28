/* tslint:disable variable-name no-string-literal */
import React from 'react'
import {media} from '../../styles/base/mq'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {Action, bindActionCreators, Dispatch} from 'redux'
import ResizeObserver from 'resize-observer-polyfill'
import {changeBreakPoint} from '../../actions/breakPointActions'

interface IProps {
	changeBreakpoint: (breakPoint: number) => void,
	onResize?: () => void,
	breakPoint: number
}

interface IState {
	windowWidth: number,
	breakPoint: number,
	style: {
		display: string,
		visibility: string
	}
}

export type HTMLElementExt = {
	currentStyle?: any
} & HTMLElement

interface IResizeObservable {
	contentRect: {
		x: number,
		y: number,
		width: number,
		height: number,
		top: number,
		right: number,
		left: number,
		bottom: number
	},
	target: HTMLElementExt
}

interface IResizeObserverType {
	observe(target: Element | null): void;

	unobserve(target: Element): void;

	disconnect(): void;
}

class ReactResizeObserver extends React.Component<IProps, IState> {
	bps = {
		desktop: 1200,
		desktop_xl: 1400,
		laptop: 992,
		mobile: 544,
		tablet: 768,
	}
	state = {
		breakPoint: 320,
		style: {
			display: 'none',
			visibility: 'hidden'
		},
		windowWidth: 0,
	}
	breakPoints = this._setBreakpointsArray()
	windowObserver: IResizeObserverType
	body: Element | null
	resizer: HTMLElementExt
	zIndex: number
	windowWidth: number

	componentDidMount() {
		// console.log('resizer init', this.windowObserver)
		if (typeof window !== 'undefined' && !this.windowObserver) {
			this.windowObserver = new ResizeObserver(this._handleResize)
			this.body = document.getElementById('resizr')
			this.windowObserver.observe(this.body)
		}

	}

	// Convert BPS object into an array
	// Not currently used
	// Used for responsive img data srces
	_setBreakpointsArray() {

		const arr: any = []

		for (const key in this.bps) {
			if (this.bps.hasOwnProperty(key)) {
				arr.push(this.bps[key])
			}
		}

		return arr.reverse()
	}

	/*
	During resize event the breakpoint is stored as a ref to compare
	against the newly set breakpoint to see if it has changed.
	If it has changed, we send the redux
	*/
	_handleResize = (entries: IResizeObservable[]) => {

		// console.log('entries', entries)

		// Grab the only element we are watching
		this.resizer = entries[0].target
		this.windowWidth = entries[0].contentRect.width

		// get current breakpoint set each time we run _setBreakpoint
		// this allows us to catch a change seperate from state change
		const oldBreakpoint = this.zIndex
		// console.log('old bp', oldBreakpoint)

		this._getZindex()

		if (oldBreakpoint !== this.zIndex && Number.isInteger(this.zIndex)) {
			// HMR safetycheck
			if (this.zIndex === 0) {
				console.log('HRM safety error')
				return
			}
			console.log('bp changed', this.zIndex)
			this.props.changeBreakpoint(this.zIndex)
		}
	}

	/*
	If Window is not present use the styles set on the element by default with CSS
	*/
	_getZindex() {

		if (window.getComputedStyle) {
			// console.log('this.resizer zindex', parseInt(window.getComputedStyle(this.resizer).zIndex, 10))

			// does not work not sure why I have it here as Else
			// console.log('this.resizer current style', this.resizer.currentStyle)
			const zIndex: string | null = window.getComputedStyle(this.resizer).zIndex

			this.zIndex = zIndex ? parseInt(zIndex, 10) : 0
		} else if (this.resizer && this.resizer.currentStyle) {
			this.zIndex = parseInt(this.resizer.currentStyle['zIndex'], 10)
		}
	}

	render() {
		return (
			<ReSizer id='resizr'>Current Breakpoint: {this.props.breakPoint}</ReSizer>
		)
	}
}

const ReSizer = styled.div`
  z-index: 544;
  visibility: hidden;
  position: relative;
    ${media.tablet`
      z-index: 768;
    `}
    ${media.laptop`
      z-index: 992;
    `}
    ${media.desktop`
      z-index: 1200;
    `}
    ${media.xLarge`
      z-index: 1400;
    `}
`

const mapDispatchToProps = (dispatch: Dispatch<Action, IState>) => {
	return {
		changeBreakpoint: bindActionCreators(changeBreakPoint, dispatch)
	}
}

const mapStateToProps = ({breakPoint}: IState) => {
	return {
		breakPoint,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactResizeObserver)
