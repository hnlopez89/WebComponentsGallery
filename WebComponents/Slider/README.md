//SLIDER COMPONENT
// SHADOW DOM
// I----------->CONTAINER_SLOT_WRAPPER
// I                I----------->SLOT_COMPONENT                                                   
// I
// I
// I----------->WRAPPER_COMPONENT
//                  I----------->SLIDER_COMPONENT
//                                      I----------->RANGE_THUMB
//                                                          I----------->(*SELECTED_TRACK_COLOR)
//                                                          I----------->(*NOT_SELECTED_TRACK_COLOR)


//SLIDER COMPONENT SIMPLE LABEL
// SHADOW DOM
// I----------->CONTAINER_SLOT_WRAPPER
// I                I----------->SLOT_COMPONENT                                                   
// I
// I
// I----------->WRAPPER_COMPONENT
//                  I----------->SLIDER_WRAPPER_COMPONENT
//                                      I----------->SLIDER_COMPONENT
//                                      I                   I----------->RANGE_THUMB
//                                      I                                       I----------->(*SELECTED_TRACK_COLOR)
//                                      I                                       I----------->(*NOT_SELECTED_TRACK_COLOR)
//                                      I----------->BUBBLE_LABEL



//SLIDER COMPONENT MULTIPLE NO LABEL
// SHADOW DOM
// I----------->CONTAINER_SLOT_WRAPPER
// I                I----------->SLOT_COMPONENT                                                   
// I
// I
// I----------->WRAPPER_COMPONENT
//                  I----------->SLIDER_WRAPPER_COMPONENT
//                  I                   I----------->SLIDER_N_WRAPPER_COMPONENT
//                  I                   I                   I----------->SLIDER_1_COMPONENT
//                  I                   I                   I                   I----------->RANGE_THUMB
//                  I                   I                   I                                       I----------->(*SELECTED_TRACK_COLOR)
//                  I                   I                   I                                       I----------->(*NOT_SELECTED_TRACK_COLOR)
//                  I                   I                   I----------->BUBBLE_1_LABEL
//                  I                   I                   
//                  I                   I----------->SLIDER_N_WRAPPER_COMPONENT
//                  I                                       I----------->SLIDER_2_COMPONENT
//                  I                                       I                   I----------->RANGE_THUMB
//                  I                                       I                                       I----------->(*SELECTED_TRACK_COLOR)
//                  I                                       I                                       I----------->(*NOT_SELECTED_TRACK_COLOR)
//                  I                                       I----------->BUBBLE_2_LABEL
//                  I----------->LABEL_WRAPPER_COMPONENT
//                                      I
//                                      I----------->MIN_VALUE_LABEL
//                                      I
//                                      I----------->MAX_VALUE_LABEL
