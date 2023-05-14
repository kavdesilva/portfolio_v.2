const ComingSoon = ({targetRefs}) => {

    return (
        <div id="coming-soon">
            <h1>Coming Soon.</h1>
            <div className="divider" ref={(el) => (targetRefs.current[4] = el)}></div>
        </div>
    )
}

export default ComingSoon