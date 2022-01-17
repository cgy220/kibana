import help from './discover-help.html'

class Help extends Component {
    
render() {
    return (
    
    <iframe
    title ="使用帮助"
    srcDoc = {help}
    style = {{width:'100%',boder:'0px', height:'100%'}}
    sandbox = "allow-some-origin allow-scripts allow-popups allows-forms"
    scrolling = "auto"
    >
   
    );
}

}