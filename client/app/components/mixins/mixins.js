function componentDidMount() {
  componentHandler.upgradeDom();
}

function componentDidUpdate() {
  componentHandler.upgradeDom();
}

export const materialMixin = {
  componentDidMount,
  componentDidUpdate,
};
