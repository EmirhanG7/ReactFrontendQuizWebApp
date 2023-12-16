export default function Header() {
    return (
        <div className="lightDark">
            <img src="/images/light-mode-icon.svg" alt="Light Mode Icon" />
                    <div onClick={()=> document.body.classList.toggle("dark-theme")} className="switchContainer">
                        <img src="/images/ellipse-10.svg" />
                    </div>
            <img src="/images/dark-mode-icon.svg" alt="Dark Mode Icon" />
        </div>
    )
}