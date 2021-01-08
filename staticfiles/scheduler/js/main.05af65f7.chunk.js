(this.webpackJsonplifescheme=this.webpackJsonplifescheme||[]).push([[0],{15:function(e,t,s){},16:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s(2),n=s.n(i),r=s(8),c=s.n(r),o=(s(15),s(16),s(9)),l=s(3),d=s(6),h=s(1),m=s(5),u=s(4),k=function(e,t,s,a,i,n){var r=new FormData;for(var c in r.append("csrfmiddlewaretoken",function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var s=document.cookie.split(";"),a=0;a<s.length;a++){var i=s[a].trim();if(i.substring(0,e.length+1)===e+"="){t=decodeURIComponent(i.substring(e.length+1));break}}return t}("csrftoken")),t)t.hasOwnProperty(c)&&r.append(c,t[c]);fetch(e,{method:"POST",headers:{"X-Requested-With":"XMLHttpRequest"},body:r,mode:"no-cors"}).then((function(e){n&&n(),200===e.status?e.json().then((function(e){s(e)})):e.json().then((function(t){400===e.status&&t.FORM_ERRORS?a(t.FORM_ERRORS):(console.log("Error: ".concat(t)),i())})).catch((function(e){console.log("Error: ".concat(e)),i()}))})).catch((function(e){n&&n(),console.log("Error: ".concat(e)),i()}))},b="/api/create-task",p="/api/update-task",j="/api/delete-task",g="/api/update-task-status",f="/api/tasks",O="An unexpected error occurred. Please try again.",v=function(e){Object(m.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(a.jsx)("button",{className:"btn",onClick:this.props.clickCbc,children:"Create new task"})}}]),s}(n.a.Component),T=function(e){Object(m.a)(s,e);var t=Object(u.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"\n                form__msg-wrapper\n                ".concat(this.props.messageIsShown?"form__msg-wrapper--shown ":"","\n                ").concat(this.props.messageIsSuccess?"form__msg-wrapper--success ":"","\n                ").concat(this.props.messageIsError?"form__msg-wrapper--error":"","\n            "),children:Object(a.jsx)("div",{children:Object(a.jsx)("span",{children:this.props.message})})})}}]),s}(n.a.Component),S=function(e){Object(m.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).uncheckedP="M5 2c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z",a.checkedP="M19 0h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z",a}return Object(d.a)(s,[{key:"render",value:function(){return Object(a.jsx)("button",{className:"task-status-link",type:"submit",onClick:this.props.taskStatusUpdateCbc,children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"task-status-link__checkbox-svg ".concat(this.props.checked?"task-status-link__checkbox-svg--checked":""),width:"20",height:"22",viewBox:"0 0 24 24",children:Object(a.jsx)("path",{d:this.props.checked?this.checkedP:this.uncheckedP})})})}}]),s}(n.a.Component),_=function(e){Object(m.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).taskStatusUpdateCbc=a.taskStatusUpdateCbc.bind(Object(h.a)(a)),a.taskDropdownClickHandler=a.taskDropdownClickHandler.bind(Object(h.a)(a)),a.state={taskDropdownShown:!1},a.launchTaskUpdateModal=a.launchTaskUpdateModal.bind(Object(h.a)(a)),a}return Object(d.a)(s,[{key:"taskStatusUpdateCbc",value:function(){this.props.taskStatusUpdateCbc(this.props.taskId)}},{key:"taskDropdownClickHandler",value:function(){this.setState({taskDropdownShown:!0})}},{key:"launchTaskUpdateModal",value:function(){this.setState({taskDropdownShown:!1}),this.props.taskUpdateModalLaunchCbc(this.props.taskId)}},{key:"launchTaskDeleteModal",value:function(){this.setState({taskDropdownShown:!1}),this.props.taskDeleteModalLaunchCbc(this.props.taskId)}},{key:"render",value:function(){return Object(a.jsxs)("tr",{className:"table__row",children:[Object(a.jsx)("td",{className:"table__cell table__cell--time",children:"".concat(this.props.startTime," - ").concat(this.props.endTime)}),Object(a.jsx)("td",{className:"table__cell table__cell--task",children:this.props.desc}),Object(a.jsxs)("td",{className:"table__cell table__cell--status",children:[Object(a.jsx)(S,{checked:this.props.completed,taskStatusUpdateCbc:this.taskStatusUpdateCbc}),Object(a.jsxs)("div",{className:"task-dropdown",children:[Object(a.jsx)("button",{className:"task-dropdown__launcher",onClick:this.taskDropdownClickHandler,children:Object(a.jsx)("svg",{className:"task-dropdown__svg",focusable:"false",xmlns:"http://www.w3.org/2000/svg",viewBox:"-1 -2 25 25",height:"30px",width:"30px",children:Object(a.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})})}),Object(a.jsxs)("div",{className:"task-dropdown__content ".concat(this.state.taskDropdownShown?"task-dropdown__content--shown":""),children:[Object(a.jsx)("button",{className:"task-dropdown__btn",onClick:this.launchTaskUpdateModal,children:"Edit"}),Object(a.jsx)("button",{className:"task-dropdown__btn",onClick:this.launchTaskDeleteModal.bind(this),children:"Delete"})]})]})]})]})}}]),s}(n.a.Component),M=function(e){Object(m.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).endpoint=e.endpoint,a.state={formIsActive:!0,formMessageIsShown:!1,formMessageIsSuccess:!1,formMessageIsError:!1,formMessage:"",startTimeVal:"",endTimeVal:"",taskDescVal:"",startTimeErrMsg:"",endTimeErrMsg:"",taskDescErrMsg:""},a.handleStartTimeChange=a.handleStartTimeChange.bind(Object(h.a)(a)),a.handleEndTimeChange=a.handleEndTimeChange.bind(Object(h.a)(a)),a.handleTaskChange=a.handleTaskChange.bind(Object(h.a)(a)),a.submitForm=a.submitForm.bind(Object(h.a)(a)),a.clearFormErrors=a.clearFormErrors.bind(Object(h.a)(a)),a.showFormSpinner=a.showFormSpinner.bind(Object(h.a)(a)),a.hideFormSpinner=a.hideFormSpinner.bind(Object(h.a)(a)),a.handleFormSubmissionSuccess=a.handleFormSubmissionSuccess.bind(Object(h.a)(a)),a.handleFormSubmissionFormErrors=a.handleFormSubmissionFormErrors.bind(Object(h.a)(a)),a.handleFormSubmissionFailure=a.handleFormSubmissionFailure.bind(Object(h.a)(a)),a.showFormMessage=a.showFormMessage.bind(Object(h.a)(a)),a.hideFormMessageBar=a.hideFormMessageBar.bind(Object(h.a)(a)),a}return Object(d.a)(s,[{key:"handleStartTimeChange",value:function(e){this.setState({startTimeVal:e.target.value})}},{key:"handleEndTimeChange",value:function(e){this.setState({endTimeVal:e.target.value})}},{key:"handleTaskChange",value:function(e){this.setState({taskDescVal:e.target.value})}},{key:"submitForm",value:function(e){e.preventDefault(),this.hideFormMessageBar(),this.clearFormErrors(),this.showFormSpinner();var t={start_time:this.state.startTimeVal,end_time:this.state.endTimeVal,task_desc:this.state.taskDescVal,task_id:this.props.taskId};k(this.endpoint,t,this.handleFormSubmissionSuccess,this.handleFormSubmissionFormErrors,this.handleFormSubmissionFailure,this.hideFormSpinner)}},{key:"clearFormErrors",value:function(){this.setState({startTimeErrMsg:"",endTimeErrMsg:"",taskDescErrMsg:""})}},{key:"showFormSpinner",value:function(){this.setState({formIsActive:!1})}},{key:"hideFormSpinner",value:function(){this.setState({formIsActive:!0})}},{key:"handleFormSubmissionSuccess",value:function(e){this.props.newDataCbc(e),this.setState({startTimeVal:"",endTimeVal:"",taskDescVal:""})}},{key:"handleFormSubmissionFormErrors",value:function(e){for(var t in e)if(e.hasOwnProperty(t)){for(var s="",a=0;a<e[t].length;a++)s+=e[t][a];"start_time"===t?this.setState({startTimeErrMsg:s}):"end_time"===t?this.setState({endTimeErrMsg:s}):"task_desc"===t&&this.setState({taskErrMsg:s})}}},{key:"handleFormSubmissionFailure",value:function(){console.log("Failure."),this.showFormMessage("An unexpected error occurred. Please try again.",!1)}},{key:"showFormMessage",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t?this.setState({formMessageIsSuccess:!0}):this.setState({formMessageIsError:!0}),this.setState({formMessageIsShown:!0,formMessage:e})}},{key:"hideFormMessageBar",value:function(){this.setState({formMessageIsSuccess:!1,formMessageIsError:!1,formMessageIsShown:!1,formMessage:""})}},{key:"render",value:function(){return Object(a.jsxs)("form",{action:this.endpoint,method:"POST",onSubmit:this.submitForm,className:"form  ".concat(this.state.formIsActive?"":"form--inactive"),children:[Object(a.jsxs)("header",{className:"form__header js-form-header",children:[Object(a.jsx)("h3",{className:"form__heading",children:this.props.title}),Object(a.jsx)("span",{className:"modal__close",onClick:this.props.closerCallback,children:"\xd7"})]}),Object(a.jsx)(T,{message:this.state.formMessage,messageIsShown:this.state.formMessageIsShown,messageIsSuccess:this.state.formMessageIsSuccess,messageIsError:this.state.formMessageIsError}),Object(a.jsxs)("div",{className:"form__body",children:[Object(a.jsxs)("div",{className:"form__input-group",children:[Object(a.jsx)("label",{className:"form__input-label",children:"Start time"}),Object(a.jsx)("input",{className:"form__input ".concat(this.state.startTimeErrMsg?"form__input--error ":""),id:"id_start_time",onChange:this.handleStartTimeChange,required:!0,type:"time",value:this.state.startTimeVal}),Object(a.jsx)("div",{className:"form__input-error-wrapper",children:Object(a.jsx)("small",{children:this.state.startTimeErrMsg})})]}),Object(a.jsxs)("div",{className:"form__input-group",children:[Object(a.jsx)("label",{className:"form__input-label",children:"End time"}),Object(a.jsx)("input",{id:"id_end_time",type:"time",className:"form__input ".concat(this.state.endTimeErrMsg?"form__input--error ":""),value:this.state.endTimeVal,onChange:this.handleEndTimeChange,required:!0}),Object(a.jsx)("div",{className:"form__input-error-wrapper",children:Object(a.jsx)("small",{children:this.state.endTimeErrMsg})})]}),Object(a.jsxs)("div",{className:"form__input-group",children:[Object(a.jsx)("label",{className:"form__input-label",children:"Task"}),Object(a.jsx)("input",{id:"id_task",type:"text",className:"form__input ".concat(this.state.taskDescErrMsg?"form__input--error ":""),value:this.state.taskDescVal,onChange:this.handleTaskChange,required:!0}),Object(a.jsx)("div",{className:"form__input-error-wrapper",children:Object(a.jsx)("small",{children:this.state.taskDescErrMsg})})]}),Object(a.jsx)("button",{className:"btn form__submit-btn",type:"submit",children:this.props.submitBtnText})]})]})}}]),s}(n.a.Component),x=function(e){Object(m.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).clickHandler=a.clickHandler.bind(Object(h.a)(a)),a.newDataCbc=a.newDataCbc.bind(Object(h.a)(a)),a}return Object(d.a)(s,[{key:"clickHandler",value:function(e){e.target.id===this.props.id&&this.props.closerCbc()}},{key:"newDataCbc",value:function(e){this.props.closerCbc(),this.props.newDataCbc(e)}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"modal ".concat(this.props.isOpened?"modal--open":""),onClick:this.clickHandler,id:this.props.id,children:Object(a.jsx)("div",{className:"modal__body js-modal-body",children:Object(a.jsx)(M,{closerCallback:this.props.closerCbc,endpoint:this.props.endpoint,newDataCbc:this.newDataCbc,title:this.props.title,submitBtnText:this.props.submitBtnText})})})}}]),s}(n.a.Component),D=function(e){Object(m.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state.startTimeVal=e.initialStartTimeVal,a.state.endTimeVal=e.initialEndTimeVal,a.state.taskDescVal=e.initialTaskDescVal,a}return s}(M),F=function(e){Object(m.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).clickHandler=a.clickHandler.bind(Object(h.a)(a)),a.newDataCbc=a.newDataCbc.bind(Object(h.a)(a)),a}return Object(d.a)(s,[{key:"clickHandler",value:function(e){e.target.id===this.props.id&&this.props.closerCbc()}},{key:"newDataCbc",value:function(e){this.props.closerCbc(),this.props.newDataCbc(e)}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"modal ".concat(this.props.isOpened?"modal--open":""),onClick:this.clickHandler,id:this.props.id,children:Object(a.jsx)("div",{className:"modal__body js-modal-body",children:Object(a.jsx)(D,{closerCallback:this.props.closerCbc,endpoint:this.props.endpoint,initialStartTimeVal:this.props.initialStartTimeVal,initialEndTimeVal:this.props.initialEndTimeVal,initialTaskDescVal:this.props.initialTaskDescVal,newDataCbc:this.newDataCbc,taskId:this.props.taskId,title:this.props.title,submitBtnText:this.props.submitBtnText})})})}}]),s}(n.a.Component),w=function(e){Object(m.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={tasks:[],tasksAreLoaded:!1,tasksLoadingFailed:!1,taskCreateFormModalIsOpen:!1,taskUpdateFormModalIsOpen:!1,taskUpdateFormDisplay:!1,messageIsOpen:!1,messageIsSuccess:!1,messageIsError:!1,message:"",taskUpdateFormModalData:{initialStartTimeVal:"",initialEndTimeVal:"",initialTaskDescVal:"",isCreated:!1,isShown:!1,taskId:""},taskDeleteFormModalData:{formIsActive:!0,formMessage:"",formMessageIsShown:!1,formMessageIsSuccess:!1,isShown:!1,taskId:"",taskName:""}},a.addNewTask=a.addNewTask.bind(Object(h.a)(a)),a.launcherClickCbc=a.launcherClickCbc.bind(Object(h.a)(a)),a.closeTaskFormModal=a.closeTaskFormModal.bind(Object(h.a)(a)),a.updateExistingTask=a.updateExistingTask.bind(Object(h.a)(a)),a.updateTaskStatus=a.updateTaskStatus.bind(Object(h.a)(a)),a.getTaskIdx=a.getTaskIdx.bind(Object(h.a)(a)),a.displayMessage=a.displayMessage.bind(Object(h.a)(a)),a.launchTaskUpdateModal=a.launchTaskUpdateModal.bind(Object(h.a)(a)),a.closeTaskDeleteFormModal=a.closeTaskDeleteFormModal.bind(Object(h.a)(a)),a}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=function(){e.displayMessage("An error occurred. Try reloading the page or contact the admin.",!1),e.setState({tasksAreLoaded:!0,tasksLoadingFailed:!0})};k(f,{},(function(t){e.setState({tasks:t.TASKS,tasksAreLoaded:!0})}),t,t,(function(){}))}},{key:"taskSortCompareFn",value:function(e,t){return e.startTime<t.startTime?-1:e.startTime>t.startTime?1:0}},{key:"addNewTask",value:function(e){var t={id:e.taskId,startTime:e.taskStartTime,endTime:e.taskEndTime,desc:e.taskDesc,completed:!1},s=[].concat(Object(o.a)(this.state.tasks),[t]);s.sort(this.taskSortCompareFn),this.setState({tasks:s})}},{key:"updateExistingTask",value:function(e){var t=this.getTaskIdx(e.taskId);if(null!==t){var s=this.state.tasks,a=s[t];console.log(a),a.startTime=e.taskStartTime,a.endTime=e.taskEndTime,a.desc=e.taskDesc,s[t]=a,this.setState({tasks:s})}else this.displayMessage(O,!1)}},{key:"launcherClickCbc",value:function(){this.setState({taskCreateFormModalIsOpen:!0})}},{key:"closeTaskFormModal",value:function(){this.setState({taskCreateFormModalIsOpen:!1})}},{key:"updateTaskStatus",value:function(e){var t=this;k(g,{task_id:e},(function(){console.log("TASKS: ".concat(t.state.tasks[0]));var s=t.getTaskIdx(e);if(null!==s){var a=t.state.tasks,i=a.splice(s,1)[0];i.completed=!i.completed,a.push(i),a.sort(t.taskSortCompareFn),t.setState({tasks:a})}else t.displayMessage(O,!1)}),(function(){t.displayMessage(O,!1)}),(function(){t.displayMessage(O,!1)}),(function(){}))}},{key:"displayMessage",value:function(e){var t=this,s=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.setState({messageIsOpen:!0,messageIsSuccess:s,messageIsError:!s,message:e}),setTimeout((function(){t.setState({messageIsOpen:!1,messageIsSuccess:!1,messageIsError:!1,message:""})}),6e3)}},{key:"getTaskIdx",value:function(e){for(var t=this.state.tasks,s=0;s<t.length;++s)if(t[s].id===e)return s;return null}},{key:"launchTaskDeleteModal",value:function(e){var t=this.getTaskIdx(e);if(null!==t){var s=this.state.tasks[t],a=this.state.taskDeleteFormModalData;a.isShown=!0,a.taskId=e,a.taskName=s.desc,this.setState({taskDeleteFormModalData:a})}else console.log("Error retrieving task with idx: ".concat(t))}},{key:"closeTaskDeleteFormModal",value:function(){var e=this.state.taskDeleteFormModalData;e.isShown=!1,this.setState({taskDeleteFormModalData:e})}},{key:"closeTaskDeleteFormModalCbc",value:function(e){"task-delete-modal"===e.target.id&&this.closeTaskDeleteFormModal()}},{key:"submitTaskDeleteForm",value:function(e){var t=this;e.preventDefault();var s=this.state.taskDeleteFormModalData;s.formMessageIsShown=!1,s.formIsActive=!1,this.setState({taskDeleteFormModalData:s});var a={task_id:this.state.taskDeleteFormModalData.taskId};k(j,a,this.handleTaskDeleteFormSuccess.bind(this),this.handleTaskDeleteFormFailure.bind(this),this.handleTaskDeleteFormFailure.bind(this),(function(){var e=t.state.taskDeleteFormModalData;e.formIsActive=!0,t.setState({taskDeleteFormModalData:e})}))}},{key:"handleTaskDeleteFormSuccess",value:function(e){var t=this.getTaskIdx(e.taskId);if(null!==t){var s=this.state.tasks;s.splice(t,1),this.setState({tasks:s}),this.closeTaskDeleteFormModal()}else console.log("Error retrieving task with idx: ".concat(e.taskId))}},{key:"handleTaskDeleteFormFailure",value:function(){var e=this.state.taskDeleteFormModalData;e.formMessage=O,e.formMessageIsSuccess=!1,e.formMessageIsShown=!0,this.setState({taskDeleteFormModalData:e})}},{key:"launchTaskUpdateModal",value:function(e){var t=this.getTaskIdx(e);if(null!==t){var s=this.state.tasks[t],a=this.state.taskUpdateFormModalData;a.initialStartTimeVal=s.startTime,a.initialEndTimeVal=s.endTime,a.initialTaskDescVal=s.desc,a.isCreated=!0,a.isShown=!0,a.taskId=e,this.setState({taskUpdateFormModalData:a})}else console.log("Error retrieving task with idx: ".concat(t))}},{key:"_closeTaskUpdateFormModal",value:function(){var e=this.state.taskUpdateFormModalData;e.isShown=!1,e.isCreated=!1,e.taskId="",this.setState({taskUpdateFormModalData:e})}},{key:"_updateExistingTask",value:function(e){var t=this.getTaskIdx(e.taskId),s=this.state.tasks,a=s[t];a.startTime=e.taskStartTime,a.endTime=e.taskEndTime,a.desc=e.taskDesc,s[t]=a,this.setState({tasks:s})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"table-wrapper",children:[Object(a.jsxs)("header",{className:"table-wrapper__header",children:[Object(a.jsx)("h1",{className:"table-wrapper__heading",children:"Today's Schedule"}),Object(a.jsx)("div",{className:"table-wrapper__header-extra",children:Object(a.jsx)(v,{clickCbc:this.launcherClickCbc})}),Object(a.jsx)(T,{message:this.state.message,messageIsSuccess:this.state.messageIsSuccess,messageIsError:this.state.messageIsError,messageIsShown:this.state.messageIsOpen})]}),Object(a.jsxs)("table",{className:"table",children:[Object(a.jsxs)("colgroup",{children:[Object(a.jsx)("col",{className:"table__col--time"}),Object(a.jsx)("col",{className:"table__col--task"}),Object(a.jsx)("col",{className:"table__col--status"})]}),Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{className:"table__header-row",children:[Object(a.jsx)("th",{className:"table__head",children:"Time"}),Object(a.jsx)("th",{className:"table__head table__head--task",children:"Task"}),Object(a.jsx)("th",{className:"table__head",children:"#"})]})}),Object(a.jsxs)("tbody",{children:[Object(a.jsx)("tr",{className:"table__row ".concat(this.state.tasks.length?"table__row--default":""),children:Object(a.jsxs)("td",{className:"table__cell",colSpan:"3",style:{textAlign:"center"},children:[Object(a.jsxs)("div",{className:"loader ".concat(this.state.tasksAreLoaded?"":"loader--shown"),children:["Loading tasks ",Object(a.jsx)("div",{className:"loader__spinner"})]}),Object(a.jsx)("span",{className:"".concat(!this.state.tasksAreLoaded||this.state.tasksLoadingFailed||this.state.tasks.length?"display-none":""),children:"You have no saved tasks for today's schedule."})]})}),this.state.tasks.map((function(t){return Object(a.jsx)(_,{completed:t.completed,desc:t.desc,endTime:t.endTime,taskId:t.id,taskStatusUpdateCbc:e.updateTaskStatus,taskUpdateModalLaunchCbc:e.launchTaskUpdateModal,taskDeleteModalLaunchCbc:e.launchTaskDeleteModal.bind(e),startTime:t.startTime},t.startTime)}))]})]}),Object(a.jsx)(x,{closerCbc:this.closeTaskFormModal,endpoint:b,id:"task-create-modal",isOpened:this.state.taskCreateFormModalIsOpen,newDataCbc:this.addNewTask,title:"Create new task",submitBtnText:"Create"}),this.state.taskUpdateFormModalData.isCreated?Object(a.jsx)(F,{closerCbc:this._closeTaskUpdateFormModal.bind(this),endpoint:p,id:"task-update-modal",isOpened:this.state.taskUpdateFormModalData.isShown,newDataCbc:this._updateExistingTask.bind(this),taskId:this.state.taskUpdateFormModalData.taskId,title:"Update Task",initialStartTimeVal:this.state.taskUpdateFormModalData.initialStartTimeVal,initialEndTimeVal:this.state.taskUpdateFormModalData.initialEndTimeVal,initialTaskDescVal:this.state.taskUpdateFormModalData.initialTaskDescVal,submitBtnText:"Update"}):null,Object(a.jsx)("div",{className:"modal ".concat(this.state.taskDeleteFormModalData.isShown?"modal--open":""),onClick:this.closeTaskDeleteFormModalCbc.bind(this),id:"task-delete-modal",children:Object(a.jsx)("div",{className:"modal__body js-modal-body",children:Object(a.jsxs)("form",{className:"form  ".concat(this.state.taskDeleteFormModalData.formIsActive?"":"form--inactive"),id:"task-delete-modal",method:"POST",onSubmit:this.submitTaskDeleteForm.bind(this),children:[Object(a.jsxs)("header",{className:"form__header js-form-header",children:[Object(a.jsx)("h3",{className:"form__heading",children:"Delete task"}),Object(a.jsx)("span",{className:"modal__close",onClick:this.closeTaskDeleteFormModal,children:"\xd7"})]}),Object(a.jsx)(T,{message:this.state.taskDeleteFormModalData.formMessage,messageIsShown:this.state.taskDeleteFormModalData.formMessageIsShown,messageIsSuccess:this.state.taskDeleteFormModalData.formMessageIsSuccess,messageIsError:!this.state.taskDeleteFormModalData.formMessageIsSuccess}),Object(a.jsxs)("div",{className:"form__body",children:[Object(a.jsxs)("p",{style:{fontSize:"1.2rem"},children:["Are you sure you want to delete",Object(a.jsx)("span",{style:{fontWeight:"bold"},children:" ".concat(this.state.taskDeleteFormModalData.taskName)})," task?"]}),Object(a.jsx)("button",{className:"btn btn--red form__submit-btn",type:"submit",children:"Yes, delete"})]})]})})})]})}}]),s}(n.a.Component);var C=function(){return Object(a.jsx)(i.Fragment,{children:Object(a.jsx)(w,{})})},I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,18)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),i(e),n(e),r(e)}))};c.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),I()}},[[17,1,2]]]);
//# sourceMappingURL=main.05af65f7.chunk.js.map