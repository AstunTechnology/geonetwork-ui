import { createFeatureSelector, createSelector } from '@ngrx/store'
import { MD_VIEW_FEATURE_STATE_KEY, MdViewState } from './mdview.reducer'

export const getMdViewState = createFeatureSelector<MdViewState>(
  MD_VIEW_FEATURE_STATE_KEY
)

export const getMetadataUuid = createSelector(
  getMdViewState,
  (state: MdViewState) => (state.metadata ? state.metadata.uuid : null)
)
export const getMetadata = createSelector(
  getMdViewState,
  (state: MdViewState) => state.metadata
)
export const getMetadataIsIncomplete = createSelector(
  getMdViewState,
  (state: MdViewState) => (state.metadata ? state.loadingFull : null)
)
export const getMetadataIsLoading = createSelector(
  getMdViewState,
  (state: MdViewState) => state.loadingFull
)
export const getMetadataError = createSelector(
  getMdViewState,
  (state: MdViewState) => state.error
)
