const initHighlightColor = "\x1b[33m";
const backtoBlack = "\x1b[0m";

const highlightConsoleText = text => `${initHighlightColor}${text}${backtoBlack}`
const getLogUnique = () => {
  let uniqueMessage, uniqueBlockId
  return (message, selectedBlockId) => {
    if (message !== uniqueMessage || selectedBlockId !== uniqueBlockId) {
      uniqueMessage = message
      uniqueBlockId = selectedBlockId
      console.log(uniqueMessage)
    }
  }
}

const log = getLogUnique()

wp.data.subscribe(() => {
  
  const { getSelectedBlock } = wp.data.select("core/block-editor");
  const { getBlockVariations, getActiveBlockVariation } = wp.data.select("core/blocks");
  
  const blockSelected = getSelectedBlock();
  let message;
  
  if (blockSelected) {
    const { clientId: selectedBlockId, name: selectedBlockName, attributes: selectedBlockAttributes } = blockSelected
    const shortVersionBlockId = selectedBlockId.split('-').pop()
    message = `block selected is ${highlightConsoleText(selectedBlockName)} with id *${highlightConsoleText(shortVersionBlockId)}`
    const blockVariations = getBlockVariations( selectedBlockName )
    if ( blockVariations ) {
      const blockVariationNames = blockVariations.map( blockVariation => blockVariation.name ).join(', ')
      message += ` - ${blockVariations.length} variations available (${highlightConsoleText(blockVariationNames)})`
      const activeBlockVariation = getActiveBlockVariation( selectedBlockName, selectedBlockAttributes )
      if ( activeBlockVariation ) {
        message += ` - activeBlockVariation → ${highlightConsoleText(activeBlockVariation.name)}`
      }
      else {
        message += ` - no variation active`
      } 
      log( message, selectedBlockId )
    }
  }
  
})
