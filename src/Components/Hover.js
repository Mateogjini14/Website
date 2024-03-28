export default function hover(){
    document.addEventListener("mousemove", parallax);
    function parallax(e){
        this.querySelectorAll("#parallax").forEach((el)=>{
            const speed = el.getAttribute('data-speed')
            const x = (window.innerWidth - el.pageX*speed)/100
            const y = (window.innerWidth - el.pageY*speed)/100
            el.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }
}
