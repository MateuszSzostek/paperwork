import React, { PropsWithChildren, useState} from "react"
import { Link } from "gatsby"
import { IButtonProps } from "../helpers/helpers"
import { Icon, InlineIcon } from '@iconify/react';

const Button = (props: PropsWithChildren<IButtonProps>) => {
  const { children, slug, backgroundColor, img } = props
  const [animated, setAnimated] = useState<boolean>(false)


  return (
    <>
        <>
          <Link to={slug} className="">
            <div className="button" style={{backgroundColor: backgroundColor}}>
                <Icon icon={img}></Icon>
              < div className="button-text"> {children}</div>
            </div>
          </Link>
        </>
    </>
  )
}

export default Button
