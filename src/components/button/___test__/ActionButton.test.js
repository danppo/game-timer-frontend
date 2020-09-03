import React from 'react';
import ReactDom from 'react-dom';
// import { findInstance } from 'react-dom-instance';
import ActionButton from './../ActionButton';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';



  it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDom.render(<ActionButton></ActionButton>, div)
  })

  it("renders with props text", () => {
    const { getByTestId } = render(<ActionButton label="click me please"></ActionButton>)
    expect(getByTestId('ActionButton')).toHaveTextContent("clck me please")
  })

  it("renders with default button variant and color", () => {
    const { getByTestId } = render(<ActionButton ></ActionButton>)
    expect(getByTestId('ActionButton')).toHaveClass("MuiButton-outlinedPrimary")
  })

  it("renders with props button variant", () => {
    const { getByTestId } = render(<ActionButton variant="contained"></ActionButton>)
    expect(getByTestId('ActionButton')).toHaveClass("MuiButton-containedPrimary")
  })

  it("renders with props button color", () => {
    const { getByTestId } = render(<ActionButton color="secondary"></ActionButton>)
    expect(getByTestId('ActionButton')).toHaveClass("MuiButton-outlinedSecondary")
    screen.debug();
  })


  // it("forms links correctly", () => {
  //   const { getByTestId } = render(<ActionButton payload="home"></ActionButton>)
  //   const createButton = findInstance( getByTestId('actionButton') );
  //   const action = 'nav'
  //   const payload = 'home'

  //   const output = createButton.handleClick()
  //   expect(output.toBe('/home'))


  // })
  // it("renders with default button color", () => {
  //   const { getByTestId } = render(<ActionButton ></ActionButton>)
  //   expect(getByTestId('ActionButton')).toHaveClass("MuiButton-outlined")
  //   screen.debug();
  // })


