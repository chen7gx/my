package my

import (
	"github.com/chen7gx/my/x/my/keeper"
	"github.com/chen7gx/my/x/my/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the calim
	for _, elem := range genState.CalimList {
		k.SetCalim(ctx, *elem)
	}

	// Set calim count
	k.SetCalimCount(ctx, genState.CalimCount)

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all calim
	calimList := k.GetAllCalim(ctx)
	for _, elem := range calimList {
		elem := elem
		genesis.CalimList = append(genesis.CalimList, &elem)
	}

	// Set the current count
	genesis.CalimCount = k.GetCalimCount(ctx)

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
