const overflowBody = (hidden = false) => {
    !hidden
        ? document.body.setAttribute("style", "overflow: hidden")
        : document.body.removeAttribute("style");

    console.log({ hidden });
}

export { overflowBody }
