/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++)
{
    inputs[i].addEventListener('keyup',function()
    {
        if(this.value.lenght>=1)
        {
            this.nextElementSibling.classList.add('fijar');
        }
        else
        {
            this.nextElementSibling.classList.remove('fijar');
        }
        
    })
}
