import * as React from 'react'
import cls from 'classnames'
import './style/index.scss'

export class __componentName__Props {
  /**
   * 样式前缀
   * @ignore
   * @default 'x-__className__'
   */
  prefixCls?: string = 'x-__className__'
}

/**
 * @author __userName__
 * @version 0.0.1
 */
export default class __componentName__ extends React.PureComponent<__componentName__Props & React.HTMLAttributes<{}>, any> {
  static defaultProps = new __componentName__Props()

  constructor(props: __componentName__Props) {
    super(props)
    this.state = {}
  }

  componentDidMount(): void {}

  // static getDerivedStateFromProps(nextProps: __componentName__Props, prevState: any) {
  //   return null
  // }

  render() {
    const { prefixCls, className, ...resetProps } = this.props

    return (
      <div className={cls(prefixCls, className)} {...resetProps}>
        hello,word!
      </div>
    )
  }
}