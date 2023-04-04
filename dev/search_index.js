var documenterSearchIndex = {"docs":
[{"location":"package_index/#Index","page":"Index","title":"Index","text":"","category":"section"},{"location":"package_index/","page":"Index","title":"Index","text":"","category":"page"},{"location":"man/mpoham/#The-@mpoham-macro","page":"The @mpoham macro","title":"The @mpoham macro","text":"","category":"section"},{"location":"man/mpoham/","page":"The @mpoham macro","title":"The @mpoham macro","text":"CurrentModule = TensorKit","category":"page"},{"location":"man/mpoham/","page":"The @mpoham macro","title":"The @mpoham macro","text":"When dealing with (quasi-) one-dimensional systems that are defined by a sum of local operators, a convenient representation exists in terms of a sparse matrix product operator with an upper diagonal structure (MPOHamiltonian). The generation of such an object starting from a sum of local operators is facilitated by the macro @mpoham, which provides several syntactic sugar features.","category":"page"},{"location":"man/mpoham/","page":"The @mpoham macro","title":"The @mpoham macro","text":"@mpoham","category":"page"},{"location":"man/mpoham/#MPSKitModels.@mpoham","page":"The @mpoham macro","title":"MPSKitModels.@mpoham","text":"@mpoham(block)\n\nSpecify a Matrix Product Operator that is represented by a sum of local operators.\n\nThis macro converts expressions of the form O{i...} to an operator acting on sites i... where O is an operator, and i can be an integer or a lattice point. The macro recognizes expressions of the following forms:\n\nO{i...} to indicate local operators O acting on sites i...\n-Inf:Inf, -∞:∞, -Inf:step:Inf, -∞:step:∞ to indicate infinite chains.\n1:L to indicate finite chains.\n∑ to represent sums.\n\nExamples\n\nH_ising = @mpoham sum(σᶻᶻ{i, i+1} + h * σˣ{i} for i in -Inf:Inf)\nH_heisenberg = @mpoham ∑(sigma_exchange(){i,j} for (i,j) in nearest_neighbours(-∞:∞))\n\n\n\n\n\n","category":"macro"},{"location":"man/models/#Models","page":"Models","title":"Models","text":"","category":"section"},{"location":"man/models/","page":"Models","title":"Models","text":"CurrentModule = MPSKitModels","category":"page"},{"location":"man/models/","page":"Models","title":"Models","text":"transverse_field_ising\nclassical_ising\nsixvertex\nxxx\nxxz\nxyz\nsu2su2_grossneveu\nnonsym_qed_qlm_ham\nsu2_xxx_ladder\nnonsym_xxz_ladder_infinite\nu1_qed_ham","category":"page"},{"location":"man/models/#MPSKitModels.transverse_field_ising","page":"Models","title":"MPSKitModels.transverse_field_ising","text":"transverse_field_ising(; J=1.0, hx=1.0, hz=0.0, spin=1//2)\n\nMPO for the hamiltonian of the transverse field Ising model, defined by     H = -J(_ij Z_i Z_j + _i hx X_i + hz Z_i)\n\n\n\n\n\n","category":"function"},{"location":"man/models/#MPSKitModels.classical_ising","page":"Models","title":"MPSKitModels.classical_ising","text":"classical_ising(; beta=log(1+sqrt(2))/2)\n\nMPO for the classical Ising partition function, defined by     Z(β) = _s exp(-βH(s)) with H(s) = _ijσ_i σ_j\n\n\n\n\n\n","category":"function"},{"location":"man/models/#MPSKitModels.sixvertex","page":"Models","title":"MPSKitModels.sixvertex","text":"sixvertex(; a=1.0, b=1.0, c=1.0)\n\nMPO for the six vertex model.\n\n\n\n\n\n","category":"function"},{"location":"man/models/#MPSKitModels.xxx","page":"Models","title":"MPSKitModels.xxx","text":"xxx(; J=1.0, spin=1)\n\nMPO for the hamiltonian of the xxx Heisenberg model, defined by     H = J(_ij X_i X_j + Y_i Y_j + Z_i Z_j)\n\n\n\n\n\n","category":"function"},{"location":"man/models/#MPSKitModels.xxz","page":"Models","title":"MPSKitModels.xxz","text":"xxz(; J=1.0, Δ=1.0, spin=1)\n\nMPO for the hamiltonian of the xxz Heisenberg model, defined by     H = J(_ij X_i X_j + Y_i Y_j + Δ Z_i Z_j)\n\n\n\n\n\n","category":"function"},{"location":"man/models/#MPSKitModels.xyz","page":"Models","title":"MPSKitModels.xyz","text":"xxz(; J=1.0, Δ=1.0, spin=1)\n\nMPO for the hamiltonian of the xyz Heisenberg model, defined by     H = J(_ij J_x X_iX_j + J_y Y_iY_j + J_z Z_iZ_j)\n\n\n\n\n\n","category":"function"},{"location":"man/models/#MPSKitModels.su2su2_grossneveu","page":"Models","title":"MPSKitModels.su2su2_grossneveu","text":"su2su2_grossneveu(;g=0.,v=0.)\n\nReturns the SU₂⊗SU₂ Gross-Neveu Hamiltonian in curved spacetime for uniform v(x)=v.\n\n\n\n\n\nsu2su2_grossneveu(vs::Vector{Float64};g=0.)\n\nReturns the SU₂⊗SU₂ Gross-Neveu Hamiltonian in curved spacetime for non-uniform v(x). The array of numbers vs contains the value of v(x) sampled at discrete points. The length of vs determines the amount of sites\n\n\n\n\n\n","category":"function"},{"location":"man/models/#MPSKitModels.nonsym_qed_qlm_ham","page":"Models","title":"MPSKitModels.nonsym_qed_qlm_ham","text":"a quantum link model of qed\n\n\n\n\n\n","category":"function"},{"location":"man/models/#MPSKitModels.su2_xxx_ladder","page":"Models","title":"MPSKitModels.su2_xxx_ladder","text":"γ is the interchain coupling strength\n\n\n\n\n\n","category":"function"},{"location":"man/models/#MPSKitModels.nonsym_xxz_ladder_infinite","page":"Models","title":"MPSKitModels.nonsym_xxz_ladder_infinite","text":"An infinite ladder: infinite in the x direction and pbc in the y direction\n\nStep 1: constructing a vector containing all bonds of the lattice: bonds\n\nStep 2: summing up all two-site operators (opp):         H = H + LocalOperator(opp, (bond.first,bond.second)) \n\n\n\n\n\n","category":"function"},{"location":"man/models/#MPSKitModels.u1_qed_ham","page":"Models","title":"MPSKitModels.u1_qed_ham","text":"the lattice qed hamiltonian, using a seperate U(1) charge for even and odd matter sites, allowing one to construct manifestly guage invariant mps's\n\n\n\n\n\n","category":"function"},{"location":"man/operators/#Operators","page":"Operators","title":"Operators","text":"","category":"section"},{"location":"man/operators/","page":"Operators","title":"Operators","text":"CurrentModule = MPSKitModels","category":"page"},{"location":"man/operators/#Spin-operators","page":"Operators","title":"Spin operators","text":"","category":"section"},{"location":"man/operators/","page":"Operators","title":"Operators","text":"The spin operators sigma_x, sigma_y and sigma_z are defined such that they obey the spin commutation relations Sⱼ Sₖ = i ɛⱼₖₗ Sₗ. Additionally, the ladder operators are defined as S = Sˣ  i Sʸ. Several combinations are defined that act on two spins.","category":"page"},{"location":"man/operators/","page":"Operators","title":"Operators","text":"When imposing symmetries, by convention we choose sigma_z as the diagonal operator, such that for non-trivial symmetry only the combinations that are invariant under this symmetry are implemented. As such, when defining the other single-site operators with a symmetry, an additional virtual space is required to carry the charge, which is by convention chosen as the second space in a (2,1) tensor.","category":"page"},{"location":"man/operators/","page":"Operators","title":"Operators","text":"sigma_x\nsigma_y\nsigma_z\nsigma_plus\nsigma_min\nsigma_xx\nsigma_yy\nsigma_zz\nsigma_plusmin\nsigma_minplus\nsigma_exchange","category":"page"},{"location":"man/operators/#MPSKitModels.sigma_x","page":"Operators","title":"MPSKitModels.sigma_x","text":"sigma_x([eltype [, symmetry]]; spin=S)\n\nspin S operator along the x-axis.\n\nSee also σˣ\n\n\n\n\n\n","category":"function"},{"location":"man/operators/#MPSKitModels.sigma_y","page":"Operators","title":"MPSKitModels.sigma_y","text":"sigma_y([eltype [, symmetry]; spin=S)\n\nspin S operator along the y-axis.\n\nSee also σʸ\n\n\n\n\n\n","category":"function"},{"location":"man/operators/#MPSKitModels.sigma_z","page":"Operators","title":"MPSKitModels.sigma_z","text":"sigma_z([eltype [, symmetry]]; spin=S)\n\nspin S operator along the z-axis.\n\nSee also σᶻ\n\n\n\n\n\n","category":"function"},{"location":"man/operators/#MPSKitModels.sigma_plus","page":"Operators","title":"MPSKitModels.sigma_plus","text":"sigma_plus([eltype [, symmetry]]; spin=S)\n\nspin S raising operator.\n\nSee also σ⁺\n\n\n\n\n\n","category":"function"},{"location":"man/operators/#MPSKitModels.sigma_min","page":"Operators","title":"MPSKitModels.sigma_min","text":"sigma_min([eltype [, symmetry]]; spin=S)\n\nspin S lowering operator.\n\nSee also σ⁻\n\n\n\n\n\n","category":"function"},{"location":"man/operators/#MPSKitModels.sigma_xx","page":"Operators","title":"MPSKitModels.sigma_xx","text":"sigma_xx([eltype [, symmetry]]; spin=S)\n\nspin S xx exchange operator.\n\nSee also σˣˣ\n\n\n\n\n\n","category":"function"},{"location":"man/operators/#MPSKitModels.sigma_yy","page":"Operators","title":"MPSKitModels.sigma_yy","text":"sigma_yy([eltype [, symmetry]]; spin=S)\n\nspin S yy exchange operator.\n\nSee also σʸʸ\n\n\n\n\n\n","category":"function"},{"location":"man/operators/#MPSKitModels.sigma_zz","page":"Operators","title":"MPSKitModels.sigma_zz","text":"sigma_zz([eltype [, symmetry]]; spin=S)\n\nspin S zz exchange operator.\n\nSee also σᶻᶻ\n\n\n\n\n\n","category":"function"},{"location":"man/operators/#MPSKitModels.sigma_plusmin","page":"Operators","title":"MPSKitModels.sigma_plusmin","text":"sigma_plusmin([eltype [, symmetry]]; spin=S)\n\nspin S +- exchange operator.\n\nSee also σ⁺⁻\n\n\n\n\n\n","category":"function"},{"location":"man/operators/#MPSKitModels.sigma_minplus","page":"Operators","title":"MPSKitModels.sigma_minplus","text":"sigma_minplus([eltype [, symmetry]]; spin=S)\n\nspin S -+ exchange operator.\n\nSee also σ⁻⁺\n\n\n\n\n\n","category":"function"},{"location":"man/operators/#MPSKitModels.sigma_exchange","page":"Operators","title":"MPSKitModels.sigma_exchange","text":"sigma_exchange([eltype [, symmetry]]; spin=S)\n\nspin S exchange operator.\n\nSee also σσ\n\n\n\n\n\n","category":"function"},{"location":"man/operators/","page":"Operators","title":"Operators","text":"For convenience, the spin 1/2 case, which reduces to the pauli matrices, have the exported unicode symbols:","category":"page"},{"location":"man/operators/","page":"Operators","title":"Operators","text":"σˣ\nσʸ\nσᶻ\nσ⁺\nσ⁻\nσˣˣ\nσʸʸ\nσᶻᶻ\nσ⁺⁻\nσ⁻⁺\nσσ","category":"page"},{"location":"man/operators/#MPSKitModels.σˣ","page":"Operators","title":"MPSKitModels.σˣ","text":"Pauli x operator\n\n\n\n\n\n","category":"constant"},{"location":"man/operators/#MPSKitModels.σʸ","page":"Operators","title":"MPSKitModels.σʸ","text":"Pauli y operator\n\n\n\n\n\n","category":"constant"},{"location":"man/operators/#MPSKitModels.σᶻ","page":"Operators","title":"MPSKitModels.σᶻ","text":"Pauli z operator\n\n\n\n\n\n","category":"constant"},{"location":"man/operators/#MPSKitModels.σ⁺","page":"Operators","title":"MPSKitModels.σ⁺","text":"Pauli raising operator\n\n\n\n\n\n","category":"constant"},{"location":"man/operators/#MPSKitModels.σ⁻","page":"Operators","title":"MPSKitModels.σ⁻","text":"Pauli lowering operator\n\n\n\n\n\n","category":"constant"},{"location":"man/operators/#MPSKitModels.σˣˣ","page":"Operators","title":"MPSKitModels.σˣˣ","text":"Pauli xx exchange operator\n\n\n\n\n\n","category":"constant"},{"location":"man/operators/#MPSKitModels.σʸʸ","page":"Operators","title":"MPSKitModels.σʸʸ","text":"Pauli yy exchange operator\n\n\n\n\n\n","category":"constant"},{"location":"man/operators/#MPSKitModels.σᶻᶻ","page":"Operators","title":"MPSKitModels.σᶻᶻ","text":"Pauli zz exchange operator\n\n\n\n\n\n","category":"constant"},{"location":"man/operators/#MPSKitModels.σ⁺⁻","page":"Operators","title":"MPSKitModels.σ⁺⁻","text":"Pauli +- exchange operator\n\n\n\n\n\n","category":"constant"},{"location":"man/operators/#MPSKitModels.σ⁻⁺","page":"Operators","title":"MPSKitModels.σ⁻⁺","text":"Pauli -+ exchange operator\n\n\n\n\n\n","category":"constant"},{"location":"man/operators/#MPSKitModels.σσ","page":"Operators","title":"MPSKitModels.σσ","text":"Pauli exchange operator\n\n\n\n\n\n","category":"constant"},{"location":"man/operators/#Bosonic-operators","page":"Operators","title":"Bosonic operators","text":"","category":"section"},{"location":"man/operators/","page":"Operators","title":"Operators","text":"","category":"page"},{"location":"man/operators/#Fermionic-operators","page":"Operators","title":"Fermionic operators","text":"","category":"section"},{"location":"man/operators/","page":"Operators","title":"Operators","text":"","category":"page"},{"location":"#MPSKitModels.jl","page":"Home","title":"MPSKitModels.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Operators, models and QOL for working with MPSKit.jl","category":"page"},{"location":"#Table-of-contents","page":"Home","title":"Table of contents","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\"home.md\", \"man/operators.md\", \"man/mpoham.md\", \"man/models.md\", \"index.md\"]\nDepth = 4","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Install with the package manager:  pkg add MPSKitModels","category":"page"},{"location":"#Package-features","page":"Home","title":"Package features","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"A macro @mpoham for conveniently specifying (quasi-) 1D hamiltonians.\nA list of predefined operators, optionally with enforced symmetry.\nA list of predefined models","category":"page"},{"location":"","page":"Home","title":"Home","text":"MPSKitModels.jl is centered around specifying MPOs through the combination of local operators that act on a finite number of sites, along with a specification of allowed sites. The former are implemented using AbstractTensorMaps from TensorKit.jl, while the latter are defined through some geometry, such as a chain, strip or cylinder, and some notion of neighbours on this geometry. Additionally, several commonly used models are provided.","category":"page"},{"location":"#To-do-list","page":"Home","title":"To do list","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Add support for finite systems\nAdd support for non-local operators and partition functions","category":"page"},{"location":"man/lattices/#Lattices","page":"Lattices","title":"Lattices","text":"","category":"section"},{"location":"man/lattices/","page":"Lattices","title":"Lattices","text":"CurrentModule = TensorKit","category":"page"},{"location":"man/lattices/","page":"Lattices","title":"Lattices","text":"Models can be defined on different lattices, and several lattices lend themselves to a description in terms of a (quasi-)one-dimensional operator. In order to facilitate this mapping, the combination of the @mpoham macro and the lattices in this package provides an easy interface.","category":"page"},{"location":"man/lattices/","page":"Lattices","title":"Lattices","text":"AbstractLattice\nInfiniteChain\nInfiniteCylinder\nInfiniteHelix","category":"page"},{"location":"man/lattices/#MPSKitModels.AbstractLattice","page":"Lattices","title":"MPSKitModels.AbstractLattice","text":"abstract type AbstractLattice end\n\nAbstract supertype of all lattices.\n\n\n\n\n\n","category":"type"},{"location":"man/lattices/#MPSKitModels.InfiniteChain","page":"Lattices","title":"MPSKitModels.InfiniteChain","text":"InfiniteChain(L::Integer=1)\n\nA one dimensional infinite lattice with a unit cell containing L sites.\n\n\n\n\n\n","category":"type"},{"location":"man/lattices/#MPSKitModels.InfiniteCylinder","page":"Lattices","title":"MPSKitModels.InfiniteCylinder","text":"InfiniteCylinder(L::Integer, N::Integer)\n\nRepresents an infinite cylinder with L sites per rung and N sites per unit cell. \n\n\n\n\n\n","category":"type"},{"location":"man/lattices/#MPSKitModels.InfiniteHelix","page":"Lattices","title":"MPSKitModels.InfiniteHelix","text":"InfiniteHelix(L::Integer, N::Integer)\n\nAn infinite helix with L sites per rung and N sites per unit cell.\n\n\n\n\n\n","category":"type"},{"location":"man/lattices/","page":"Lattices","title":"Lattices","text":"Having defined a lattice, it is possible to iterate over several points or combinations of points that can be of interest. Such a point is represented as a LatticePoint, which is defined in terms of an integer N-dimensional coordinate system representation, and supports addition and subtraction, both with other points or with tuples. These structures also handle the logic of being mapped to a one-dimensional system.","category":"page"},{"location":"man/lattices/","page":"Lattices","title":"Lattices","text":"LatticePoint\nlinearize_index\nvertices\nnearest_neighbours\nbipartition","category":"page"},{"location":"man/lattices/#MPSKitModels.LatticePoint","page":"Lattices","title":"MPSKitModels.LatticePoint","text":"LatticePoint{N,G}\n\nrepresents an N-dimensional point on a G lattice.\n\n\n\n\n\n","category":"type"},{"location":"man/lattices/#MPSKitModels.linearize_index","page":"Lattices","title":"MPSKitModels.linearize_index","text":"linearize_index(lattice, indices...)\n\nconvert a given set of indices into a linear index.\n\n\n\n\n\n","category":"function"},{"location":"man/lattices/#MPSKitModels.vertices","page":"Lattices","title":"MPSKitModels.vertices","text":"vertices(lattice)\n\nconstruct an iterator over all lattice points.\n\n\n\n\n\n","category":"function"},{"location":"man/lattices/#MPSKitModels.nearest_neighbours","page":"Lattices","title":"MPSKitModels.nearest_neighbours","text":"nearest_neighbours(lattice)\n\nconstruct an iterator over all pairs of nearest neighbours.\n\n\n\n\n\n","category":"function"},{"location":"man/lattices/#MPSKitModels.bipartition","page":"Lattices","title":"MPSKitModels.bipartition","text":"bipartition(lattice)\n\nconstruct two iterators over the vertices of the bipartition of a given lattice.\n\n\n\n\n\n","category":"function"},{"location":"man/lattices/","page":"Lattices","title":"Lattices","text":"Sometimes it might be useful to change the order of the linear indices of certain lattices. In this case a wrapper around a lattice can be defined through the following:","category":"page"},{"location":"man/lattices/","page":"Lattices","title":"Lattices","text":"SnakePattern","category":"page"},{"location":"man/lattices/#MPSKitModels.SnakePattern","page":"Lattices","title":"MPSKitModels.SnakePattern","text":"SnakePattern(lattice, pattern)\n\nRepresents a given lattice with a linear order that is provided by pattern.\n\n\n\n\n\n","category":"type"},{"location":"man/lattices/","page":"Lattices","title":"Lattices","text":"Any mapping of linear indices can be used, but the following patterns can be helpful:","category":"page"},{"location":"man/lattices/","page":"Lattices","title":"Lattices","text":"backandforth_pattern\nfrontandback_pattern","category":"page"},{"location":"man/lattices/#MPSKitModels.backandforth_pattern","page":"Lattices","title":"MPSKitModels.backandforth_pattern","text":"backandforth_pattern(cylinder)\n\npattern that alternates directions between different rungs of a cylinder\n\n\n\n\n\n","category":"function"},{"location":"man/lattices/#MPSKitModels.frontandback_pattern","page":"Lattices","title":"MPSKitModels.frontandback_pattern","text":"frontandback_pattern(cylinder)\n\npattern that alternates between a site on the first half of a rung and a site on the second half of a rung.\n\n\n\n\n\n","category":"function"}]
}
