package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateCalim{}

func NewMsgCreateCalim(creator string, proof string) *MsgCreateCalim {
	return &MsgCreateCalim{
		Creator: creator,
		Proof:   proof,
	}
}

func (msg *MsgCreateCalim) Route() string {
	return RouterKey
}

func (msg *MsgCreateCalim) Type() string {
	return "CreateCalim"
}

func (msg *MsgCreateCalim) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCalim) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCalim) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateCalim{}

func NewMsgUpdateCalim(creator string, id uint64, proof string) *MsgUpdateCalim {
	return &MsgUpdateCalim{
		Id:      id,
		Creator: creator,
		Proof:   proof,
	}
}

func (msg *MsgUpdateCalim) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCalim) Type() string {
	return "UpdateCalim"
}

func (msg *MsgUpdateCalim) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCalim) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCalim) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCalim{}

func NewMsgDeleteCalim(creator string, id uint64) *MsgDeleteCalim {
	return &MsgDeleteCalim{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteCalim) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCalim) Type() string {
	return "DeleteCalim"
}

func (msg *MsgDeleteCalim) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCalim) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCalim) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
