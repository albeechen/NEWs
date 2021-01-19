import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    container:{
      display: 'flex',
      alignContent: 'center'
    },
    imgcontent:{
      width:'50%',
      '&::-webkit-scrollbar': { 
        display: 'none'
      }
    },
    textcontent:{
      width: '20%',
      border: '1px solid white',
      '&::-webkit-scrollbar': { 
        display: 'none',
      }
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
}));


const NewsDetail = (props) => {

 
  const [scroll, setScroll] = React.useState('paper');

  const classes = useStyles();
 // const [fullWidth, setFullWidth] = React.useState(true);
  //const [maxWidth, setMaxWidth] = React.useState('md');
  const {open, onClose, selectItem} = props;

  const handleClose = () => {
    onClose();
  };
 
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <Dialog 
        fullWidth
        maxWidth='md'
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogActions>
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
        <DialogContent className={classes.container}>
        <DialogContent className={classes.imgcontent}>
          <img
            srcSet={`{selectItem}?w=350h=350&fit=crop&auto=format 1x,
                ${selectItem}?w=550&h=550fit=crop&auto=format&dpr=2 2x`}
            alt={selectItem} 
          />
        </DialogContent>
        <DialogContent dividers={scroll === 'paper'} className={classes.textcontent}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join('\n')}
          </DialogContentText>
        </DialogContent>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default NewsDetail;