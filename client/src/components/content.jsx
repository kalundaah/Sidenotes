import React from 'react'
import "./slider.js"
function Content() {
  return (
    <div className='contentarea'>
        <h2>Notes</h2>
        <div className="notesdiv">
            <div className="notes">
                <h2>Note title</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ducimus accusantium cum corrupti, consequatur molestiae, vero, eveniet asperiores explicabo perspiciatis possimus. Magnam ullam veniam quo dolorum iure numquam voluptatibus minus?</p>
            </div>

            <div className="notes">
                <h2>Note title</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ducimus accusantium cum corrupti, consequatur molestiae, vero, eveniet asperiores explicabo perspiciatis possimus. Magnam ullam veniam quo dolorum iure numquam voluptatibus minus?</p>
            </div>

            <div className="notes">
                <h2>Note title</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ducimus accusantium cum corrupti, consequatur molestiae, vero, eveniet asperiores explicabo perspiciatis possimus. Magnam ullam veniam quo dolorum iure numquam voluptatibus minus?</p>
            </div>

            <div className="notes">
                <h2>Note title</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ducimus accusantium cum corrupti, consequatur molestiae, vero, eveniet asperiores explicabo perspiciatis possimus. Magnam ullam veniam quo dolorum iure numquam voluptatibus minus?</p>
            </div>

            <div className="notes">
                <h2>Note title</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ducimus accusantium cum corrupti, consequatur molestiae, vero, eveniet asperiores explicabo perspiciatis possimus. Magnam ullam veniam quo dolorum iure numquam voluptatibus minus?</p>
            </div>
        </div>
        <div className="sliderdiv">
            <div className="space"><h1>EMPTY SPACE</h1></div>
            <div className="actualslider">
                <div className="button"><button>Previous</button></div>
                <div><h3 className='slidenumber'>1/5</h3></div>
                <div className="button"><button>Next</button></div>
            </div>
            <div className="to_taskdiv">
                <button className='to_taskbutton'>V</button>
            </div>
        </div>
        <h2>Tasks</h2>
        <div className="taskdiv">
        <table>
            <thead>
                <tr>
                    <th>Objective</th>
                    <th>Details</th>
                    <th>Deadline</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Clean the fridge</td>
                    <td>The fridge was dirty</td>
                    <td>EOB Today</td>
                    <td><input type="checkbox"/></td>
                </tr>
                <tr>
                    <td>Clean the fridge</td>
                    <td>The fridge was dirty</td>
                    <td>EOB Today</td>
                    <td><input type="checkbox"/></td>
                </tr>
            </tbody>
            <tfoot>

            </tfoot>

        </table>
        </div>

    </div>
  )
}

export default Content