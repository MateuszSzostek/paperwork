import React, { PropsWithChildren, useState, useEffect } from "react"
import { IButtonProps } from "../helpers/helpers"
import { Icon } from '@iconify/react';
import { Link } from "gatsby"
import googleIcon from '@iconify-icons/grommet-icons/google';

const Button = (props: PropsWithChildren<IButtonProps>) => {
  const { children, slug, backgroundColor, img } = props


  return (
    <>
        <>
          <Link to={slug} className="google-button-text">
            <div className="google-button flex row align-center" style={{backgroundColor: backgroundColor}}>
                <Icon className="user-icon" icon={googleIcon}></Icon>
              < div className=""> {children}</div>
            </div>
          </Link>
        </>
    </>
  )
}

export default Button
