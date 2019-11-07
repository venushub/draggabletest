import * as React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import './App.css'
import { Droppable, Draggable } from "react-beautiful-dnd";
import MyDragDrop from './MyDragDrop'


const App = () => {

  const [elems, setElems] = React.useState({
    elements : [
      {
        id : 1,
        type : 'none',
        operator : 'none'
      },
      {
        id : 2,
        type : 'none',
        operator : 'none'
      },
      {
        id : 3,
        type : 'none',
        operator : 'none'
      }
    ]
  });

  const [se, setSe] = React.useState({
    selectedElementId : {}
  })

  const [buyElems, setBuyElems] = React.useState({
    buyElements : [
      {
        id : 9999,
        type : 'buy',
        operator : 'none'
      },
    ]
  });

  const [sellElems, setSellElems] = React.useState({
    sellElements : [
      {
        id : 8888,
        type : 'sell',
        operator : 'none'
      },
    ]
  });

  const createElem = () => {
    setElems({
      elements : [...elems.elements, {id : elems.elements.length + 1, type : 'none', operator : 'none'}]
    })
  }

  return (
    <DragDropContext
      onDragEnd={({ destination, source, listType }) => {
        console.log(destination , source)
        if(destination.droppableId === 'buy-droppable'){
          
        }
      }}
    >
      <div className="super-con">
        <div className="top-head">
          <button onClick={createElem} className="add-button">+</button>
          <Droppable
              droppableId={`mmmmm`}
              isCombineEnabled={false}
              type="CARD"
              direction="horizontal"  
            >
              {dropProvided => (
                <div style={{height : "100%", display : "flex", alignItems:"center"}}  {...dropProvided.droppableProps}>
                      <div style={{ display: "flex" }} ref={dropProvided.innerRef}>
                        {elems.elements.map((el, index) => (
                          <Draggable key={`el-${el.id}`} draggableId={`el-${el.id}`} index={index}>
                            {dragProvided => (
                              <div
                                {...dragProvided.dragHandleProps}
                                {...dragProvided.draggableProps}
                                ref={dragProvided.innerRef}
                              >
                                <div key={el.id} onClick={() => setSe({selectedElementId : el})} style={{backgroundColor : el.color, padding : "1.5em", margin : "0.5em 0 0.5em 0.5em"}}>{el.id}</div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                      </div>
                </div>
              )}
            </Droppable>
        </div>
        <div style={{display : "flex", justifyContent : "space-between", height : "90vh"}}>
          <div style={{display : 'flex', flexWrap : "wrap"}}>
            <div>
              <Droppable
                droppableId={`buy-droppable`}
                isCombineEnabled={false}
                type="CARD"
                direction="horizontal"  
              >
                {dropProvided => (
                  <div style={{ display : "flex", alignItems:"center", backgroundColor : "lightyellow", width :"500px", height : "200px"}}  {...dropProvided.droppableProps}>
                        <div style={{ display: "flex" }} ref={dropProvided.innerRef}>
                          {buyElems.buyElements.map((el, index) => (
                            <Draggable key={`bel-${el.id}`} draggableId={`bel-${el.id}`} index={index}>
                              {dragProvided => (
                                <div
                                  {...dragProvided.dragHandleProps}
                                  {...dragProvided.draggableProps}
                                  ref={dragProvided.innerRef}
                                >
                                  <div key={el.id} onClick={() => setSe({selectedElementId : el})} style={{backgroundColor : el.color, padding : "1.5em", margin : "0.5em 0 0.5em 0.5em"}}>{el.id}</div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                        </div>
                  </div>
                )}
              </Droppable>
              <Droppable
              droppableId={`sell-droppable`}
              isCombineEnabled={false}
              type="CARD"
              direction="horizontal"  
              >
                {dropProvided => (
                  <div style={{ display : "flex", alignItems:"center", backgroundColor : "lightyellow", width :"500px", height : "200px"}}  {...dropProvided.droppableProps}>
                        <div style={{ display: "flex" }} ref={dropProvided.innerRef}>
                          {sellElems.sellElements.map((el, index) => (
                            <Draggable key={`sel-${el.id}`} draggableId={`sel-${el.id}`} index={index}>
                              {dragProvided => (
                                <div
                                  {...dragProvided.dragHandleProps}
                                  {...dragProvided.draggableProps}
                                  ref={dragProvided.innerRef}
                                >
                                  <div key={el.id} onClick={() => setSe({selectedElementId : el})} style={{backgroundColor : el.color, padding : "1.5em", margin : "0.5em 0 0.5em 0.5em"}}>{el.id}</div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                        </div>
                  </div>
                )}
              </Droppable>
            </div>
          </div>
          <div style={{backgroundColor : "lightgrey", height : "100%", padding : "1em"}}>
              <div>Selected Element</div>
              <div style={{marginTop : "1em", width : "100%"}}>
                Id : {se.selectedElementId.id}
              </div>
              <div style={{marginTop : "1em", width : "100%"}}>
                type : {se.selectedElementId.type}
              </div>
              <div style={{marginTop : "1em", width : "100%"}}>
                operator : {se.selectedElementId.operator}
              </div>
          </div>
        </div>
      </div>
    </DragDropContext>
  );


  
};



export default App;