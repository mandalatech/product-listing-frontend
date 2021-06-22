import { CCard, CCardBody } from '@coreui/react'
import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Switch from 'src/components/Switch'

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

const GRID = 8

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: GRID * 2,
  margin: `0 0 ${GRID}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'lightgrey',

  // styles we need to apply on draggables
  ...draggableStyle,
  borderRadius: '10px',
})

const allIngredients = [
  {
    id: '1',
    content: 'Brand',
    isInvolved: true,
  },
  {
    id: '2',
    content: 'Manufacturer',
    isInvolved: true,
  },
]

const getListStyle = (isDraggingOver) => ({
  background: 'white',
  padding: GRID,
  width: 250,
})

const SKUFormulation = (props) => {
  const [items, setItems] = useState(allIngredients)

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const newItems = reorder(
      items,
      result.source.index,
      result.destination.index
    )

    setItems(newItems)
  }

  const handleIngredientInvolvement = (value, ingredientID) => {
    const ingredientIndex = items.findIndex((item) => item.id === ingredientID)
  }

  return (
    <CCard className="addpro-custom-card sm-pd">
      <CCardBody>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                        className="d-flex justify-content-between align-items-start"
                      >
                        <p>{item.content}</p>
                        <Switch
                          color="lightgreen"
                          onChange={(value) =>
                            handleIngredientInvolvement(value, item.id)
                          }
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </CCardBody>
    </CCard>
  )
}

export default SKUFormulation
