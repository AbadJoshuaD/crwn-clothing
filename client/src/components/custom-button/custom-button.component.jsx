import React from 'react';
import '../custom-button/custom-button.styles.scss';

//Created a reusable custom/generic button that can be used across the application
const CustomButton = ({children,isGoogleSignIn,inverted,...otherProps}) =>(
        <button className={`${inverted ? 'inverted':''}
        ${isGoogleSignIn ? 'google-sign-in':''} custom-button`} {...otherProps}>
            {children}
    {/*As you can see we can dynamically change the style classes of the button depending on certain scenarios */}
        </button>
)
export default CustomButton;
